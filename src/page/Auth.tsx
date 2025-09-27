import style from './Auth.module.css'
import SignIn from "../components/SignIn/SignIn.tsx";

const Auth = () => {
    return (
        <main>
            <section className={style['left-section']}>

            </section>
            <section className={style['right-section']}>
                <SignIn />
            </section>
        </main>
    );
};

export default Auth;