import React, { ReactNode, useMemo } from 'react';
import Navbar from "@/components/shared/Navbar";
import { useWidgetLayout } from "@/context/CityLayoutContext";
import { useRouter } from 'next/router';
import { Steps } from 'intro.js-react';
import { onboardingSteps } from '@/utils/constants';


type LayoutProps = {
    children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {

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

    return (
        <div className="guide-global min-h-screen flex flex-col">
            <Steps
                enabled={true}
                steps={onboardingSteps}
                initialStep={0}
                onExit={() => { }}
            />
            <header className="h-16 selector1">
                <Navbar />
            </header>

            <main className={`flex flex-1 relative bg-primary ${pathname === "/" && layoutwiseClasses[selectedLayout]} w-full`}
                style={{ maxHeight: "calc(100vh - 66px)" }}
            >{children}</main>
        </div>
    );
};

export default Layout;
