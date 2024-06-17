"use client"
import AuthFormContainer from '@/app/components/AuthFormContainer'
import { filterFormikErrors } from '@/app/utils/formikHelpters'
import { Box, Button, Flex, FormControl, FormLabel, Heading, Input, Text, VStack } from '@chakra-ui/react'
import { Field, Formik, useFormik, FormikProvider } from 'formik'
import { signIn } from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'
import { toast } from 'react-toastify'
import * as yup from "yup";

const validationSchema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});

export default function SignInPage() {
  const router = useRouter();
  const {
    values,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
    errors,
    touched } = useFormik({
      initialValues: { email: '', password: '' },
      onSubmit: async (values, actions) => {
        const signInRes = await signIn("credentials", {
          ...values,
          redirect: false,
        });

        if (signInRes?.error === "CredentialsSignin") {
          toast.error("Email/Password mismatch!");
        }

        if (!signInRes?.error) {
          router.refresh();
        }
      },
    })

  const formErrors: string[] = filterFormikErrors(errors, touched, values);
  type valueKeys = keyof typeof values;
  const { email, password } = values;
  const error = (name: valueKeys) => {
    return errors[name] && touched[name] ? true : false;
  };

  return (
    <Flex className={`basePadding`} minHeight="100vh" alignItems="center" justifyContent="center">
      <Box width={{ base: '100%', sm: '80%', md: '50%', lg: '35%' }} p={{ base: '24px', md: '48px' }} rounded="lg" border="1px solid black">
        <Heading>Sign In</Heading>
        <AuthFormContainer onSubmit={handleSubmit}>
          <FormLabel htmlFor='email'>Email</FormLabel>
          <Input
            name="email"
            id="Email"
            value={email}
            onChange={handleChange}
            onBlur={handleBlur}
            errorBorderColor='crimson'

          />
          <FormLabel htmlFor='password'>Password</FormLabel>
          <Input
            name="password"
            id="Password"
            value={password}
            onChange={handleChange}
            onBlur={handleBlur}
            errorBorderColor='crimson'
            type="password"
          />
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            Sign In
          </Button>
          <Link href='/auth/signup'>
            <Text textDecoration="underline" mt='10px'>Sign Up</Text>
          </Link>
          <Link href='/auth/forgot-password'>
            <Text textDecoration="underline" mt='10px'>Forgot Password</Text>
          </Link>
          <Link href='/'>
            <Text textDecoration="underline" mt='10px'>Back to Home</Text>
          </Link>

        </AuthFormContainer>
      </Box>
    </Flex>
  )
}