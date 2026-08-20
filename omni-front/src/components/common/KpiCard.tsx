import type { ReactNode } from "react";

interface KpiCardProps {
    children: ReactNode;
    value: string;
    comment: string;
}

const KpiCard = ({children, value, comment}: KpiCardProps) => {
    return (
        <>
            <div className="flex flex-col p-3 h-full w-80 bg-gray-200 rounded-sm">
                        {children}
                        <div>
                            {value}
                        </div>
                        <div>
                            {/* (예상: + 0.2% | 부합) */}
                            {comment}
                        </div>
            </div>
        </>
    );
};

export default KpiCard;