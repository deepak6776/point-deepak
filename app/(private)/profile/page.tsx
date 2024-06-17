import EmailVerificationBanner from "@/app/components/EmailVerificationBanner";
import ProfileForm from "@/app/components/ProfileForm";
import startDb from "@/app/lib/db";
import UserModel from "@/app/models/userModel";
import { auth } from "@/auth";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";
import { Flex, Text } from '@chakra-ui/react'

const fetchUserProfile = async () => {
    const session = await auth();
    if (!session) return redirect("/auth/signin");

    await startDb();
    const user = await UserModel.findById(session.user.id);
    if (!user) return redirect("/auth/signin");
    return {
        id: (user._id as string).toString(),
        name: user.name,
        email: user.email,
        avatar: user.avatar?.url,
        verified: user.verified,
    };
};

export default async function Profile() {
    const profile = await fetchUserProfile();

    return (
        <div>
            <Flex height='100vh' width="80%" ml='auto' p='32px'>
                <EmailVerificationBanner verified={profile.verified} id={profile.id} />
                <div className="flex py-4 space-y-4">
                    <div className="border-r border-gray-700 p-4 space-y-4">
                        <ProfileForm
                            id={profile.id}
                            email={profile.email}
                            name={profile.name}
                            avatar={profile.avatar}
                        />
                    </div>
                </div>
            </Flex>


        </div>
    );
}