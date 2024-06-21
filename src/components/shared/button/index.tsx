import "./index.scss";

type Props = {
    text: string;
    type?: 'button' | 'submit';
    disabled?: boolean;
    variant?: 'primary' | 'secondary';
    onClick?: () => void;
}
const BMButton = ({ text, type = 'button', variant = 'secondary', disabled, onClick }: Props) => {
    return <button disabled={disabled} type={type} className={`bm-btn bm-btn-${variant}`} onClick={onClick}>
        {text}
    </button>
}
export default BMButton