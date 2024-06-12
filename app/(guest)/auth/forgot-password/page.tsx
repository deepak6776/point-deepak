"use client"
import AuthFormContainer from '@/app/components/AuthFormContainer'
import { Box, Button, Flex, FormControl, FormLabel, Heading, Input, Text, VStack } from '@chakra-ui/react'
import { Field, useFormik } from 'formik'
import Link from 'next/link'
import React from 'react'

export default function ForgotPasswordPage() {
  const { values, handleChange, handleBlur, handleSubmit,
    isSubmitting, errors, touched } = useFormik({
      initialValues: { email: '' },
      onSubmit: (values) => {
        console.log(values);
      }
    })

  const formErrors: string[] = [];

  const { email } = values;
  return (
    <Flex className={`basePadding`} minHeight="100vh" alignItems="center" justifyContent="center">
      <Box width={{ base: '100%', sm: '80%', md: '50%', lg: '35%' }} p={{ base: '24px', md: '48px' }} rounded="lg" border="1px solid black">
        <Heading>Forgot Password</Heading>
        <AuthFormContainer onSubmit={handleSubmit}>
          <FormLabel htmlFor='email'>Email</FormLabel>
          <Input
            name="email"
            id="Email"
            value={email}
            onChange={handleChange}
            onBlur={handleBlur}

          />
          <Button type='submit' width="100%" mt='20px'>Submit</Button>
          <Link href='/'>
            <Text textDecoration="underline" mt='10px'>Back to Home</Text>
          </Link>

        </AuthFormContainer>


      </Box>
    </Flex>
  )
}
