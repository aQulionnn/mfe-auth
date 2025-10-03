import type { SignInRequest, SignInResponse, SignUpRequest } from "../types/account";
import api from "./api"

export const signIn = async (signInRequest: SignInRequest) => {
    const { data } = await api.post<SignInResponse>("/accounts/sign-in", signInRequest);
    return data
}

export const signUp = async (signUpRequest: SignUpRequest) => {
    const { data } = await api.post("/accounts/sign-up", signUpRequest);
    return data
}