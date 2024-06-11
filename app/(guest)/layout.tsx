import { redirect } from "next/navigation";
import React, { ReactNode } from "react";


interface Props {
  children: ReactNode;
}

export default async function GuestLayout({ children }: Props) {

  return (
    <div>
      {children}
    </div>
  );
}
