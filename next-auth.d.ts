import NextAuth, {DefaultSession} from "next-auth"

export type ExtendedUser = DefaultSession["user"] & {
    id: string;
    role: "ADMIN" | "USER"
}

declare module "next-auth" {
    interface Session {
        user:{
            role: string
        } & DefaultSession["user"]
    }
}

import { JWT } from "@auth/core/jwt"

declare module "@auth/core/jwt" {
    interface JWT {
        role?: "ADMIN" | "USER"
    }
}

