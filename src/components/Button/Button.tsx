import style from './Button.module.css'

type Props = {
    text: string
}

const Button = ({ text }: Props) => {
    return (
        <button className={style['form-btn']}>
            { text }
        </button>
    );
};

export default Button;