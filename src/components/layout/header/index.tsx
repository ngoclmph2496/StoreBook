import BMFormGroup from "../../shared/form-group";
import "./index.scss";

const BMHeader = () => {
    return <div className="bm-header">
        <div className="bm-search">
            <BMFormGroup controlType="text" onChange={() => { }} placeholder="Search..." />
        </div>
        <a href="#" className="bm-noti">
            <i className="fa-solid fa-bell"></i>
            <span>3</span>
        </a>
        <div className="bm-user">
            <div className="avatar">
                <img src="/images/user.png" alt="User" />
            </div>
            <div className="info">
                <div className="label">Welcome,</div>
                <div className="username">Lavender</div>
            </div>
        </div>
    </div>
}
export default BMHeader