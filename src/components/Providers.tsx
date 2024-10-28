'use client';

import { SessionProvider } from "next-auth/react";
import { draftMode } from "next/headers";
import React from "react";
import {
    ThemeProvider as NextThemesProvider,
} from "next-themes"
import { type ThemeProviderProps } from "next-themes/dist/types"
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const Providers = ({ children, ...props }: ThemeProviderProps) => {
    return (
        <QueryClientProvider client={queryClient}>
            <NextThemesProvider
                attribute="class"
                defaultTheme="system"
                enableColorScheme
                {...props}
            >
                <SessionProvider>  {children} </SessionProvider>
            </NextThemesProvider>
        </QueryClientProvider>
    );
};

export default Providers 