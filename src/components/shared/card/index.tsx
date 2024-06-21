import BMLoading from "../loading";
import "./index.scss";

type Props = {
    title: string;
    children: JSX.Element;
    loading?: boolean;
}
const BMCard = ({ title, children, loading = false }: Props) => {
    return <div className="bm-card">
        {loading ? <BMLoading /> : <></>}
        <div className="bm-card-title">{title}</div>
        <div className="bm-card-body">
            {children}
        </div>
    </div>
}
export default BMCard