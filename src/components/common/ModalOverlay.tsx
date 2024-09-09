import { Dispatch, SetStateAction } from "react";

export function ModalOverlay({
    showSideNav,
    isShowing
}: {
    showSideNav: Dispatch<SetStateAction<boolean>>,
    isShowing: boolean
}
) {
    if (isShowing) {
        return <div
            className={`flex lg:hidden fixed top-0 right-0 bottom-0 left-0 bg-black/50 z-40 animate-in fade-in-10`}
            onClick={() => {
                showSideNav(oldVal => !oldVal);
            }}
        />
    } else {
        return <div />
    }
}