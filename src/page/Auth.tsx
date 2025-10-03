import style from './Auth.module.css'
import SignIn from "../components/SignIn/SignIn.tsx";
import { useState } from "react";
import SignUp from "../components/SignUp/SignUp.tsx";

const Auth = () => {
    const [isSignIn, setIsSignIn] = useState<boolean>(true);

    return (
        <main>
            <section className={style['left-section']}>

            </section>
            <section className={style['right-section']}>
                { isSignIn && <SignIn setIsSignIn={setIsSignIn} /> }
                { !isSignIn && <SignUp setIsSignIn={setIsSignIn} /> }
            </section>
        </main>
    );
};

export default Auth;