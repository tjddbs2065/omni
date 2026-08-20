import type { ReactNode } from "react";

interface CpiKpiSectionProps {
    children: ReactNode;
}

const CpiKpiSection = ({children}: CpiKpiSectionProps) => {
    return (
        <>
            <div className="flex flex-row h-35 p-4 bg-gray-100 border-2 border-gray-300 rounded-xl justify-evenly">
                {children}
            </div>
        </>
    );
};

export default CpiKpiSection;