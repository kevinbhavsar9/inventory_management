import React, { ReactNode, useCallback, useEffect, useMemo, useState } from 'react';
import Navbar from "@/components/shared/Navbar";
import { useWidgetLayout } from "@/context/CityLayoutContext";
import { useRouter } from 'next/router';
import { Steps } from 'intro.js-react';
import { onboardingSteps } from '@/utils/constants';


type LayoutProps = {
    children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {

    const [showTour, setShowTour] = useState<boolean>(false);
    const { selectedLayout } = useWidgetLayout();
    const router = useRouter();
    const { pathname } = router;




    const layoutwiseClasses: { [key: string]: string } = useMemo(() => {
        return {
            "top": "items-start",
            "right": "flex-col items-end",
            "left": "flex-col items-start",
            "bottom": "items-end"
        }
    }, [])

    const handletourClose = () => {
        const isFirstTime = localStorage.getItem("isFirstTime")
        if (!isFirstTime) {
            localStorage.setItem("isFirstTime", "0")
        }
        setShowTour(false)
    }

    const handleShowTour = useCallback(() => {
        setShowTour(true)
    }, [])

    useEffect(() => {
        const isFirstTime = localStorage.getItem("isFirstTime")
        setShowTour(isFirstTime === null)
    }, [])

    return (
        <div className="guide-global min-h-screen flex flex-col">
            {
                <Steps
                    enabled={showTour}
                    steps={onboardingSteps}
                    initialStep={0}
                    onExit={handletourClose}
                    options={{
                        showButtons: true,
                        showStepNumbers: true,
                        exitOnOverlayClick: false,
                        doneLabel: 'End',
                        nextLabel: 'Next',
                        prevLabel: 'Back',
                    }}
                />
            }

            <header className="h-16">
                <Navbar handleShowTour={handleShowTour} />
            </header>

            <main className={`flex flex-1 relative bg-primary ${pathname === "/" && layoutwiseClasses[selectedLayout]} w-full`}
                style={{ maxHeight: "calc(100vh - 66px)" }}
            >{children}</main>
        </div>
    );
};

export default Layout;
