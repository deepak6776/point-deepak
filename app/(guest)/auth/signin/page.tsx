"use client"
import AuthFormContainer from '@/app/components/AuthFormContainer'
import { Box, Button, Flex, FormControl, FormLabel, Heading, Input, Text, VStack } from '@chakra-ui/react'
import { Field, Formik, useFormik, FormikProvider } from 'formik'
import Link from 'next/link'
import React from 'react'


export default function SignInPage() {

  const { values, handleChange, handleBlur, handleSubmit,
    isSubmitting, errors, touched } = useFormik({
      initialValues: { email: '', password: ''},
      onSubmit: (values) => {
        console.log(values);
      }
    })

  const formErrors: string[] = [];

  const { email, password } = values;

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

          />
          <FormLabel htmlFor='password'>Password</FormLabel>
          <Input
            name="password"
            id="Password"
            value={password}
            onChange={handleChange}
            onBlur={handleBlur}

            type="password"
          />
          <Button type="submit" className="w-full"  disabled={isSubmitting}>
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