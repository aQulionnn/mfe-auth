import type { SignInRequest, SignInResponse } from "../types/account";
import api from "./api"


export const signIn = async (signInRequest: SignInRequest) => {
    const { data } = await api.post<SignInResponse>("/sign-in", signInRequest);
    return data
}