import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import BMLoading from "../shared/loading";
import BMHeader from "./header";
import "./index.scss";
import BMSidebar from "./sidebar";

const BMAppLayout = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1000)
    }, [])

    return <div className="bm-ui">
        {loading ? <BMLoading showLogo /> : <></>}
        <BMSidebar />
        <div className="bm-main">
            <BMHeader />
            <div className="bm-body">
                <div className="bm-inner">
                    <Outlet />
                </div>
            </div>
        </div>
    </div>
}
export default BMAppLayout