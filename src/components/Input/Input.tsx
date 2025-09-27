import './Input.module.css';

type Props = {
    type: string
    label: string
}

const Input = ({ type, label }: Props) => {

    return (
        <label>
            { label }
            <input type={type} />
        </label>
    );
};

export default Input;