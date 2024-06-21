import { Link } from "react-router-dom";
import "./index.scss";
import { APP_ROUTES } from "../../../constants/route";

const BMSidebar = () => {
    return <div className="bm-sidebar">
        <Link to={APP_ROUTES.DEFAULT} className="bm-logo">
            <img src="images/logo.svg" alt="Book" />
        </Link>
        <ul>
            <li>
                <Link to={APP_ROUTES.DEFAULT}><i className="fa-solid fa-table-cells-large"></i></Link>
            </li>
            <li>
                <Link to={APP_ROUTES.BOOK} className="active"><i className="fa-solid fa-book"></i></Link>
            </li>
            <li>
                <a href="#"><i className="fa-solid fa-user"></i></a>
            </li>
            <li>
                <a href="#"><i className="fa-solid fa-life-ring"></i></a>
            </li>
            <li>
                <a href="#"><i className="fa-solid fa-wrench"></i></a>
            </li>
            <li>
                <a href="#"><i className="fa-solid fa-right-from-bracket"></i></a>
            </li>
        </ul>
    </div>
}
export default BMSidebar