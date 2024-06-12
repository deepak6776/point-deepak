"use client"
import AuthFormContainer from '@/app/components/AuthFormContainer'
import { Box, Button, Flex, FormControl, FormLabel, Heading, Input, Text, VStack } from '@chakra-ui/react'
import { useFormik } from 'formik'
import Link from 'next/link'


export default function SignUpPage() {
  const { values, handleChange, handleBlur, handleSubmit,
    isSubmitting, errors, touched } = useFormik({
      initialValues: { name: '', email: '', password: '', cpassword: '' },
      onSubmit: (values) => {
        console.log(values);
      }
    })

  const formErrors: string[] = [];

  const { email, name, password, cpassword } = values;


  return (
    <Flex className={`basePadding`} minHeight="100vh" alignItems="center" justifyContent="center">
      <Box width={{ base: '100%', sm: '80%', md: '50%', lg: '35%' }} p={{ base: '24px', md: '48px' }} rounded="lg" border="1px solid black">
        <Heading>Sign Up</Heading>
        {/* <form onSubmit={handleSubmit}> */}
          <AuthFormContainer title="Create New Account" onSubmit={handleSubmit}>
          
            <FormLabel htmlFor='name'>Name</FormLabel>
            <Input
              name="name"
              id="Name"
              value={name}
              onChange={handleChange}
              onBlur={handleBlur}

            />
          
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
            <FormLabel htmlFor='cpassword'>Confirm Password</FormLabel>
            <Input
              name="cpassword"
              id="cpassword"
              value={cpassword}
              onChange={handleChange}
              onBlur={handleBlur}

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
      </Box>
    </Flex>
  )
}
