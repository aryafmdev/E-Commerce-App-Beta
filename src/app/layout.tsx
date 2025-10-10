import {Toaster} from "@/components/ui/sonner";
import {ContextProvider} from "@/providers/ContextProvider";
import TanstackProvider from "@/providers/TanstackProvider";
import type {Metadata} from "next";
import React from "react";
import "./globals.css";


export const metadata: Metadata = {
    title: "Aryafmdev",
    description: "E-Commerce-App-AryaFM",
};

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en">
        <body>
        <ContextProvider>
            <Toaster position="top-center" toastOptions={{
                classNames: {
                    title: 'text-sm !font-semibold !text-contrast-0'
                },
                duration: 7000
            }}/>
            <TanstackProvider>{children}</TanstackProvider>
        </ContextProvider>
        </body>
        </html>
    );
}
