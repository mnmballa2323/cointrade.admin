import React from 'react';
export type ImageProps=Omit<React.ImgHTMLAttributes<HTMLImageElement>,'src'> & {src:any;fill?:boolean;priority?:boolean;quality?:number;unoptimized?:boolean;};
export default function Image({src,fill,priority,quality,unoptimized,style,...props}:ImageProps) {
    return <img {...props} src={typeof src==='string'?src:src?.src} loading={priority?'eager':props.loading||'lazy'} style={{...(fill?{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'cover'}:{}),...style}} />;
}
