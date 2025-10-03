import style from './SignUp.module.css'
import Input from "../Input/Input.tsx";
import Button from "../Button/Button.tsx";
import React, { useReducer } from "react";
import { signUp } from "../../services/accountService.ts";

type State = {
    email: string;
    username: string
    password: string
    repeatPassword: string
}

type Action =
    { type: "SET_EMAIL", payload: string } |
    { type: "SET_USERNAME", payload: string } |
    { type: "SET_PASSWORD", payload: string } |
    { type: "SET_REPEAT_PASSWORD", payload: string } |
    { type: "RESET" }

const reducer = (state: State, action: Action) => {
    switch (action.type) {
        case "SET_EMAIL": return { ...state, email: action.payload }
        case "SET_USERNAME": return { ...state, username: action.payload }
        case "SET_PASSWORD": return { ...state, password: action.payload }
        case "SET_REPEAT_PASSWORD": return { ...state, repeatPassword: action.payload }
        case "RESET": return { email: "", username: "", password: "", repeatPassword: "" };
    }
}

type Props = {
    setIsSignIn: (val: boolean) => void
}

const SignUp = ({ setIsSignIn }: Props) => {
    const [state, dispatch] = useReducer(reducer, { email: "", username: "", password: "", repeatPassword: "" });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (state.password !== state.repeatPassword) {
            alert("Passwords do not match")
            return
        }

        try {
            const body = {
                email: state.email,
                username: state.username,
                password: state.password,
            }

            const response = await signUp(body);

            if (response) {
                dispatch({ type: "RESET" })
                setIsSignIn(true)
            }
        }
        catch (error) {
            alert(error)
        }
    }

    return (
        <form onSubmit={handleSubmit} className={style['sign-up']}>
            <span onClick={() => setIsSignIn(true)}>Already have and account</span>
            <div>
                <h1>Sign Up</h1>
                <fieldset>
                    <Input
                        type="email"
                        label="Email"
                        value={state.email}
                        onChange={val => dispatch({ type: "SET_EMAIL", payload: val })}
                    />
                    <Input
                        type="text"
                        label="Username"
                        value={state.username}
                        onChange={val => dispatch({ type: "SET_USERNAME", payload: val })}
                    />
                    <Input
                        type="password"
                        label="Password"
                        value={state.password}
                        onChange={val => dispatch({ type: "SET_PASSWORD", payload: val })}
                    />
                    <Input
                        type="password"
                        label="Repeat Password"
                        value={state.repeatPassword}
                        onChange={val => dispatch({ type: "SET_REPEAT_PASSWORD", payload: val })}
                    />
                </fieldset>
            </div>
            <Button text="SIGN UP" />
        </form>
    );
};

export default SignUp;