import Image from "next/image";
import Link from "next/link";
import { MenuItem } from "./MenuItem";
import { ChevronsRight, ChevronsLeft, HomeIcon, InfoIcon, FileTextIcon, BriefcaseIcon, MailIcon, SunIcon, MoonIcon } from "lucide-react";
import { Dispatch, SetStateAction } from "react";
import { cx } from "class-variance-authority";
import { TooltipProvider } from "../ui/tooltip";
import { useTheme } from 'next-themes';
import { useEffect, useState } from "react";

export function SideNav({
    isShowing,
    showSideNav,
}: {
    isShowing: boolean;
    showSideNav: Dispatch<SetStateAction<boolean>>;
}) {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // When mounted on client, setMounted to true
    useEffect(() => setMounted(true), []);

    const className = "fixed ease-in-out duration-200 transition-[margin-left, width] z-50 inset-y-0 left-0 lg:block overflow-y-auto  border-r-1 border-r-blue-800 w-sidenav-open";
    const appendClass = isShowing ? "block ml-0 shadow-2xl lg:w-sidenav-open" : "ml-n-sidenav-open lg:w-sidenav-closed lg:ml-0";
    const w = isShowing;

    const closeNav = () => {
        showSideNav(false);
    };

    if (!mounted) return null; // Ensures hydration error is avoided

    return (
        <TooltipProvider delayDuration={100}>
            <aside className={cx(className, appendClass)}>
                <nav className="grid items-center p-4 h-full" style={{ gridTemplateRows: `min-content auto min-content` }}>
                    <div className="flex flex-col gap-3">
                        <Link href="/" className={"flex mb-5"}>
                            <div className="flex justify-center items-center font-bold">
                                <Image src="/Logo.svg" alt="Vinay Valson Logo" width={38} height={38} />
                            </div>
                        </Link>
                        <MenuItem href="/" tooltip="Home" isWide={w} closeNav={closeNav}>
                            <HomeIcon className="text-black dark:text-white" scale={1.5} />
                        </MenuItem>
                        <MenuItem href="/about" tooltip="About" isWide={w} closeNav={closeNav}>
                            <InfoIcon className="text-black dark:text-white" scale={1.5} />
                        </MenuItem>
                        <MenuItem href="/resume" tooltip="Resume" isWide={w} closeNav={closeNav}>
                            <FileTextIcon className="text-black dark:text-white" scale={1.5} />
                        </MenuItem>
                        <MenuItem href="/projects" tooltip="Projects" isWide={w} closeNav={closeNav}>
                            <BriefcaseIcon className="text-black dark:text-white" scale={1.5} />
                        </MenuItem>
                        <MenuItem href="/contact" tooltip="Contact" isWide={w} closeNav={closeNav}>
                            <MailIcon className="text-black dark:text-white" scale={1.5} />
                        </MenuItem>
                    </div>
                    <div className="flex flex-1">&nbsp;</div>
                    <div className="flex flex-col gap-3 pb-3 lg:pb-0">
                        <div className="cursor-pointer" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
                            <MenuItem href="#" tooltip={theme === "light" ? "Light" : "Dark"} isWide={w} closeNav={closeNav}>
                                {theme === "light" ? <SunIcon className="text-black" scale={1.5} /> : <MoonIcon className="text-white" scale={1.5} />}
                            </MenuItem>
                        </div>
                        <div className="hidden lg:block cursor-pointer">
                            <MenuItem href={() => showSideNav(oldVal => !oldVal)} tooltip={isShowing ? "Hide Menu" : "Expand"} isWide={w}>
                                {isShowing ? (
                                    <ChevronsLeft className="text-black dark:text-white" scale={1.5} />
                                ) : (
                                    <ChevronsRight className="text-black dark:text-white" scale={1.5} />
                                )}
                            </MenuItem>
                        </div>
                    </div>
                </nav>
            </aside>
        </TooltipProvider>
    );
}