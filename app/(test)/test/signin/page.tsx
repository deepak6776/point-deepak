"use client"
import AuthFormContainer from '@/app/components/AuthFormContainer'
import { Box, Button, Flex, FormControl, FormLabel, Heading, Input, Text, VStack } from '@chakra-ui/react'
import { Field, Formik, useFormik } from 'formik'
import Link from 'next/link'
import React from 'react'

export default function SignInPage() {
    const {
        values,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        errors,
        touched,
    } = useFormik({
        initialValues: { name: "", email: "", password: "" },
        onSubmit: (values) => {
            console.log(values)


        },
    });

    const formErrors: string[] = [];

    const { email, password } = values;

    return (
        <AuthFormContainer title="Create New Account" onSubmit={handleSubmit}>
            <Input
                name="email"
                // label="Email"
                value={email}
                onChange={handleChange}
                onBlur={handleBlur}
                // error={error("email")}
            />
            <Input
                name="password"
                // label="Password"
                value={password}
                onChange={handleChange}
                onBlur={handleBlur}
                // error={error("password")}
                type="password"
            />
            <Button type="submit" className="w-full" disabled={isSubmitting}>
                Sign in
            </Button>
            <div className="flex items-center justify-between">
                <Link href="/auth/signup">Sign up</Link>
                <Link href="/auth/forget-password">Forget password</Link>
            </div>
        </AuthFormContainer>
    )
}
