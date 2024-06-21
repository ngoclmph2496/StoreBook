import "./index.scss";

type Props = {
    label?: string;
    required?: boolean;
    disabled?: boolean;
    controlType?: 'text' | 'number';
    placeholder?: string;
    value?: string | number;
    errorMessage?: string;
    onChange: (value: string) => void;
}
const BMFormGroup = ({ label, required = false, disabled = false, controlType = 'text', placeholder = '', value = '', errorMessage, onChange }: Props) => {
    return <div className="bm-form-group">
        {label ? <label className="bm-form-label">
            {label}{required ? ' *' : ''}
        </label> : <></>}
        <input className="bm-form-control"
            disabled={disabled}
            required={required}
            type={controlType}
            placeholder={placeholder || ''}
            value={value}
            onChange={e => onChange(e.target.value)}
            step={controlType === 'number' ? 'any' : undefined}
        />
        {errorMessage ? <div className="bm-form-error">{errorMessage}</div> : <></>}
    </div>
}
export default BMFormGroup