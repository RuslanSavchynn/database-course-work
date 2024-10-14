import { SessionProvider } from "next-auth/react";
import { draftMode } from "next/headers";
import React  from "react";

type Props = {
children: React.ReactNode;
};

const Providers = ({children}: Props) => {
    return (
      <SessionProvider>
        {children}
      </SessionProvider>
    )
};

export default Providers 