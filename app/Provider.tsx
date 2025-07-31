import { AuthProvider } from "@/app/context/AuthContext";
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
function Provider({ children }: Props) {
  return <AuthProvider>{children}</AuthProvider>;
}

export default Provider;
