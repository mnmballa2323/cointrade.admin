'use client';
import React,{createContext,useContext,useEffect,useRef,forwardRef,Fragment} from 'react';
import {createPortal} from 'react-dom';
export function Menu({children,className}:any) {return <details className={className}>{children}</details>;}
export function MenuButton({children,...props}:any) {return <summary {...props}>{children}</summary>;}
export function MenuItems({children,modal,...props}:any) {return <div {...props} onKeyDown={event=>{if(event.key==='Escape'){const details=event.currentTarget.closest('details');if(details){details.open=false;(details.querySelector('summary') as HTMLElement)?.focus();}}}}>{children}</div>;}
export function MenuItem({children,...props}:any) {return <div {...props}>{typeof children==='function'?children({active:false,close:()=>{}}):children}</div>;}
const Visibility=createContext(true);
export function Transition({children,show=true,...props}:any) {return show?<Visibility.Provider value={show}>{children}</Visibility.Provider>:null;}
export const TransitionChild=({children}:any)=><>{children}</>;
export function Dialog({children,onClose,open,className,...props}:any) {
    const context=useContext(Visibility),visible=open??context,ref=useRef<HTMLDialogElement>(null);
    useEffect(()=>{const dialog=ref.current;if(!dialog)return;const previous=document.activeElement as HTMLElement|null;if(visible&&!dialog.open)dialog.showModal();if(!visible&&dialog.open)dialog.close();return()=>{if(dialog.open)dialog.close();if(previous?.isConnected)previous.focus({preventScroll:true});};},[visible]);
    if (!visible) return null;
    return createPortal(<dialog {...props} ref={ref} className={className} style={{border:0,maxWidth:'none',maxHeight:'none',background:'transparent',...(props.style||{})}} onCancel={event=>{event.preventDefault();onClose?.(false);}} onClick={event=>{if(event.target===event.currentTarget)onClose?.(false);}}>{children}</dialog>,document.body);
}
export const DialogPanel=({children,...props}:any)=><div {...props}>{children}</div>;
export const DialogTitle=({children,...props}:any)=><h2 {...props}>{children}</h2>;
export function Switch({checked,onChange,children,...props}:any) {return <button {...props} type="button" role="switch" aria-checked={Boolean(checked)} onClick={()=>onChange?.(!checked)}>{children}</button>;}
// Optional decoration becomes native CSS; functional controls retain their DOM semantics.
const tags=['div','span','button','tr','td','section','article','li','p','h1','h2','svg','path'] as const;
export const motion:any=Object.fromEntries(tags.map(tag=>[tag,forwardRef<any,any>((props,ref)=>{const {initial,animate,exit,transition,whileHover,whileTap,layout,layoutId,variants,drag,...dom}=props;return React.createElement(tag,{...dom,ref});})]));
export const AnimatePresence=({children}:any)=><>{children}</>;

export function LinkMenuItem({children,...props}:any) {return <a {...props}>{children}</a>;}
