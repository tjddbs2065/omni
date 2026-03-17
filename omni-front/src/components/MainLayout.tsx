import { Outlet } from "react-router-dom";

const MainLayout = ()=>{
    return (
        <>
            <div className="h-[100px]">
                test
            </div>
            <div className="flex-1 flex">
                <div className="w-[300px]">

                </div>
                <div className="flex-1 flex">
                    <Outlet />
                </div>
            </div>
        </>
    );
};

export default MainLayout;