import type { ReactNode } from "react";

interface PageHeaderProps {
    children: ReactNode;
}

const PageHeader = ({children}: PageHeaderProps) => {
    return (
        <>
            <div className="flex bg-gray-100 dark:bg-gray-800">
                   <h2 className="font-bold text-foreground">{children}</h2>
            </div>
        </>
    );
};

export default PageHeader;