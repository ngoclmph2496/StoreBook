import "./index.scss";

type Props = {
    showLogo?: boolean;
}
const BMLoading = ({ showLogo = false }: Props) => {
    return <div className="bm-loading">
        {showLogo ? <img src="images/logo.svg" alt="Logo" /> : <span>Loading...</span>}
    </div>
}
export default BMLoading