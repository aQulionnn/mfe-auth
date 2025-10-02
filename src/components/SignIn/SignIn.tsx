import style from './SignIn.module.css'
import Button from "../Button/Button.tsx";
import Input from "../Input/Input.tsx";
import { useReducer } from "react";
import React from "react";
import {signIn} from "../../services/accountService.ts";

type State = {
    username: string
    password: string
}

type Action =
    { type: "SET_USERNAME", payload: string } |
    { type: "SET_PASSWORD", payload: string } |
    { type: "RESET" }

const reducer = (state: State, action: Action) => {
    switch (action.type) {
        case "SET_USERNAME": return { ...state, username: action.payload }
        case "SET_PASSWORD": return { ...state, password: action.payload }
        case "RESET": return { username: "", password: "" };
    }
}

const SignIn = () => {
    const [state, dispatch] = useReducer(reducer, { username: "", password: "" });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const body = {
            username: state.username,
            password: state.password,
        }

        const response = await signIn(body);

        if (response != null) {
            dispatch({ type: "RESET" })
            console.log(response);
        }
    }

    return (
        <form onSubmit={handleSubmit} className={style['sign-in']}>
            <span>Create an account</span>
            <div>
                <h1>Sign In</h1>
                <fieldset>
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
                </fieldset>
            </div>
            <Button text="SIGN IN" />
        </form>
    );
};

export default SignIn;