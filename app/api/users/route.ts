import { NewUserRequest } from "@/app/types";
import startDb from "@lib/db";
import UserModel from "@models/userModel";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import crypto from "crypto";
import EmailVerificationToken from "@/app/models/emailVerificationToken";
import { genSalt, hash } from "bcrypt";
import { sendEmail } from "@/app/lib/email";

export const POST = async (req: Request) => {
    const body = await req.json() as NewUserRequest;
    await startDb();
    const newUser = await UserModel.create({
        ...body
    })

    const token = crypto.randomBytes(36).toString("hex");
    console.log(`token: ${token}`)
    
    await EmailVerificationToken.create({
        user: newUser._id,
        token,
    });

    // var transport = nodemailer.createTransport({
    //     host: "sandbox.smtp.mailtrap.io",
    //     port: 2525,
    //     auth: {
    //         user: "73efceaf4744a2",
    //         pass: "c9537de3b480e0"
    //     }
    // });

    const verificationUrl = `http://localhost:3000/verify?token=${token}&userId=${newUser._id}`;

    // await transport.sendMail({
    //     from: 'verification@nextecom.com',
    //     to: newUser.email,
    //     html: `<h1>Please verify your email by clicking here
    //      <a href="${verificationUrl}">this link</a></h1>`
    // })

    await sendEmail({
        profile: { name: newUser.name, email: newUser.email },
        subject: "verification",
        linkUrl: verificationUrl,
      });

    // console.log(values);
    return NextResponse.json({message: "Please check your email!"});
};
