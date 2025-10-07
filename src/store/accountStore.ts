import { create } from "zustand"
import { persist, createJSONStorage } from "zustand/middleware"
import type {SignInResponse} from "../types/account";

type AccountStore = {
    token: string
    tokenType: string
    expiresIn: number
    refreshToken: string
    setAuth: (data: SignInResponse) => void
    signOut: () => void
}

export const useAccountStore = create(
    persist<AccountStore>(
        (set) => ({
            token: "",
            tokenType: "",
            expiresIn: 0,
            refreshToken: "",
            setAuth: (data) =>
                set(() => ({
                    token: data.accessToken,
                    tokenType: data.tokenType,
                    expiresIn: data.expiresIn,
                    refreshToken: data.refreshToken
                })),
            signOut: () =>
                set(() => ({
                    token: "",
                    tokenType: "",
                    expiresIn: 0,
                    refreshToken: ""
                }))
        }),
        {
            name: "account",
            storage: createJSONStorage(() => sessionStorage)
        }
    )
)