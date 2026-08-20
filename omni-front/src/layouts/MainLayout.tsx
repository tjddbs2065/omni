import { Outlet } from "react-router-dom";

const MainLayout = ()=>{
    return (
        <>
            <div className="flex-1 flex">
                <div className="w-[200px] bg-indigo-100">
                    Side Bar
                </div>
                <div className="flex-1 flex-row">
                    <div className="h-10 bg-gray-200">
                        Header Bar
                    </div>
                    <div className="flex-1">
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    );
};

export default MainLayout;