export type SignInRequest = {
    username: string
    password: string
}

export type SignInResponse = {
    tokenType: string
    accessToken: string
    expiresIn: number
    refreshToken: string
}