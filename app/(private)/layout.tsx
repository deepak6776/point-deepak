import { auth } from "@/auth";
import { redirect } from "next/navigation";
import React, { ReactNode } from "react";
import Navbar from "../components/Navbar";
import EmailVerificationBanner from "../components/EmailVerificationBanner";
import Sidebar from "../components/ui/Sidebar/Sidebar";


interface Props {
  children: ReactNode;
}

export default async function PrivateLayout({ children }: Props) {
  const session = await auth();
  //   console.log(session);
  if (!session) return redirect("/auth/signin");

  return (
    <div className="max-w-screen-xl mx-auto p-4 xl:p-0">
      {/* <Navbar/> */}
      <Sidebar>
        {children}
      </Sidebar>


    </div>
  );
}
