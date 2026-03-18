import { Outlet } from "react-router-dom";

const MainLayout = ()=>{
    return (
        <>
            <div className="h-[100px] bg-zinc-100">
                test
            </div>
            <div className="flex-1 flex">
                <div className="w-[200px] bg-indigo-100">

                </div>
                <div className="flex-1 flex m-4">
                    <Outlet />
                </div>
            </div>
        </>
    );
};

export default MainLayout;