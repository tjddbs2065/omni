import type { ReactNode } from "react";

interface PageBreadcrumbProps {
    children: ReactNode;
}

const PageBreadcrumb = ({children}: PageBreadcrumbProps) => {
    return (
        <>
            <div className="flex text-gray-600 text-sm">
                    {children}
            </div>
        </>
    );
};

export default PageBreadcrumb;