'use client'

import { SideNav } from "./SideNav";
import { useState } from "react";
import { ModalOverlay } from "./ModalOverlay";

export function MainLayout({
    className,
    role,
    ...props
}: React.HTMLAttributes<HTMLElement>) {
    const [sideNavVisible, setShowSideNav] = useState(false);
    return (
        <>
            <SideNav key={"sidenav"} isShowing={sideNavVisible} showSideNav={setShowSideNav} />
            <ModalOverlay key={"modal-overlay"} isShowing={sideNavVisible} showSideNav={setShowSideNav} />
        </>
    )
}