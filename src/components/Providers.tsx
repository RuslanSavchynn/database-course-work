'use client';

import { SessionProvider } from "next-auth/react";
import { draftMode } from "next/headers";
import React  from "react";
import { ThemeProvider as NextThemesProvider, ThemeProvider } from "next-themes"
import { type ThemeProviderProps } from "next-themes/dist/types"


const Providers = ({ children, ...props }: ThemeProviderProps) => {
    return (
    <ThemeProvider attribute="class" defaultTheme="system" enableColorScheme>
        <SessionProvider>  {children} </SessionProvider>
    </ThemeProvider>
          );
};

export default Providers 