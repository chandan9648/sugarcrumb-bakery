import * as React from 'react';
import { cn } from '@/lib/utils';
export function Button({className, variant='primary', ...props}: React.ButtonHTMLAttributes<HTMLButtonElement> & {variant?:'primary'|'outline'|'quiet'}) {
 const styles={primary:'bg-[#34241f] text-white hover:bg-[#50362d]',outline:'border border-[#d8c8bb] bg-transparent text-[#34241f] hover:bg-[#f4ebe3]',quiet:'text-[#34241f] hover:bg-[#f4ebe3]'};
 return <button className={cn('inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition duration-200 disabled:opacity-50',styles[variant],className)} {...props}/>;
}
