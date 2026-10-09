import React from 'react';
export default function Select({className,classButton,label,placeholder,value,onChange,items}:any) {
 return <label className={className}>{label&&<span className="mb-2 block">{label}</span>}<select aria-label={label||placeholder||'Select an option'} className={classButton||'w-full rounded-xl border p-2'} value={value?.id??''} onChange={event=>onChange(items.find((item:any)=>String(item.id)===event.target.value))}>
 <option value="" disabled>{placeholder||'Select'}</option>{items.map((item:any)=><option key={item.id} value={item.id}>{item.title}</option>)}</select></label>;
}
