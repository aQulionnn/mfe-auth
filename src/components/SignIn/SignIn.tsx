import './SignIn.module.css'
import Button from "../Button/Button.tsx";
import Input from "../Input/Input.tsx";

const SignIn = () => {
    return (
        <form>
            <span>Create an account</span>
            <div>
                <h1>Sign In</h1>
                <fieldset>
                    <Input type="text" label="Username" />
                    <Input type="password" label="Password" />
                </fieldset>
            </div>
            <Button text="SIGN IN" />
        </form>
    );
};

export default SignIn;