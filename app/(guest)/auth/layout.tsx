import { redirect } from "next/navigation";
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default async function AuthLayout({ children }: Props) {
  

  return (
    <div>
      {children}
    </div>
  );
}