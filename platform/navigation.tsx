'use client';
import React, { createContext, useContext, useEffect, useState } from 'react';
export const RouteContext = createContext<{params:Record<string,string>;path:string}>({params:{},path:'/'});
function navigate(url:string,replace=false) {
    const target=new URL(url,location.href);
    if (target.origin!==location.origin) {location.assign(target.href);return;}
    if (replace) history.replaceState(null,'',target.href);else history.pushState(null,'',target.href);
    window.dispatchEvent(new PopStateEvent('popstate'));window.scrollTo(0,0);
}
export const useRouter=()=>({push:(url:string)=>navigate(url),replace:(url:string)=>navigate(url,true),back:()=>history.back(),forward:()=>history.forward(),refresh:()=>location.reload(),prefetch:(_url:string)=>{}});
export const useParams=<T extends Record<string,any>=Record<string,string>>()=>useContext(RouteContext).params as T;
export const usePathname=()=>useContext(RouteContext).path;
export function useSearchParams() {const [query,setQuery]=useState(typeof location==='undefined'?'':location.search);useEffect(()=>{const update=()=>setQuery(location.search);window.addEventListener('popstate',update);return()=>window.removeEventListener('popstate',update);},[]);return new URLSearchParams(query);}
export class Redirect { constructor(public url:string) {} }
export class MissingRoute {}
export function redirect(url:string):never {throw new Redirect(url);}
export function notFound():never {throw new MissingRoute();}
export default function Link({href,children,onClick,replace,prefetch,scroll,...props}:any) {
    const url=typeof href==='string'?href:href?.pathname||'/';
    return <a {...props} href={url} onClick={event=>{onClick?.(event);if(event.defaultPrevented||event.button!==0||event.metaKey||event.ctrlKey||event.shiftKey||event.altKey||props.target==='_blank'||props.download)return;const target=new URL(url,location.href);if(target.origin!==location.origin||target.pathname===location.pathname&&target.search===location.search)return;event.preventDefault();navigate(url,replace);}}>{children}</a>;
}
