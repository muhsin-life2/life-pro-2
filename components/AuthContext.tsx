"use client";


import { SessionProvider } from "next-auth/react";

export interface AuthContextProps {
    children: React.ReactNode,
    session
}
export default function AuthContext({ children, session }: AuthContextProps) {
    return <SessionProvider session={session}>{children}</SessionProvider>;
}