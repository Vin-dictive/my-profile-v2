'use client'


import { usePathname, useRouter } from "next/navigation"
import { cx } from "class-variance-authority"
import { PropsWithChildren } from "react";
import Link from "next/link";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

export function MenuItem({
    children, tooltip, href, isWide, closeNav
}: PropsWithChildren & { href: string | Function, tooltip: string, isWide: boolean, closeNav?: () => void }) {
    const router = useRouter();
    const onClick = async (event: any, href: string) => {
        event.preventDefault();
        if (closeNav) closeNav();
        await router.push(href);
    }
    let element;
    const baseClass = "flex items-center justify-start rounded-lg bg-opacity-20 bg-white-900 opacity-65 text-black dark:text-white transition-opacity hover:opacity-100 gap-2 p-2";
    if (typeof href == 'string') {
        const pathname = usePathname();
        const isActive = href == '/' ? pathname == href : pathname.startsWith(href);
        element = (
            <Link
                href={href}
                onClick={(e) => onClick(e, href)}
                className={cx(
                    baseClass,
                    isActive ? 'bg-grey-900' : ''
                )}
            >
                {children} {isWide && tooltip}
            </Link>
        )
    } else {
        element = (
            <div className={baseClass} onClick={(e) => href(e)}>
                {children} {isWide && tooltip}
            </div>
        )
    }
    if (isWide) {
        return (
            <div className="w-full">
                {element}
            </div>
        )
    } else {
        return (
            <Tooltip>
                <TooltipTrigger asChild>
                    {element}
                </TooltipTrigger>
                <TooltipContent side="right" className="bg-white text-sm shadow-lg text-zinc-950">
                    {tooltip}
                </TooltipContent>
            </Tooltip>
        )
    }
}