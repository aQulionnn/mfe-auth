import style from './Input.module.css';

type Props = {
    type: string
    label: string
    value: string
    onChange: (val: string) => void
}

const Input = ({ type, label, value, onChange }: Props) => {

    return (
        <label className={style['label']}>
            { label }
            <input type={type} value={value} onChange={e => onChange(e.target.value)} />
        </label>
    );
};

export default Input;