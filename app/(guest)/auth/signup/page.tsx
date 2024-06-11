"use client"
import AuthFormContainer from '@/app/components/AuthFormContainer'
import { Box, Button, Flex, FormControl, FormLabel, Heading, Input, Text, VStack } from '@chakra-ui/react'
import { useFormik } from 'formik'
import Link from 'next/link'


export default function SignUpPage() {
  const { values, handleChange, handleBlur, handleSubmit,
    isSubmitting, errors, touched } = useFormik({
      initialValues: { name: '', email: '', password: '' },
      onSubmit: (values) => {
        console.log(values);
      }
    })

  const formErrors: string[] = [];

  const { email, name, password } = values;


  return (
    <Flex className={`basePadding`} minHeight="100vh" alignItems="center" justifyContent="center">
      <Box width={{ base: '100%', sm: '80%', md: '50%', lg: '35%' }} p={{ base: '24px', md: '48px' }} rounded="lg" border="1px solid black">
        <Heading>Sign Up</Heading>
        <form onSubmit={handleSubmit}>
        {/* <AuthFormContainer title='Sign Up' onSubmit={handleSubmit}> */}
          <VStack mt='20px'>
            <FormControl>
              <FormLabel htmlFor='name'>Name</FormLabel>
              <Input
                name="name"
                id='name'
                type="text"
                onChange={handleChange}
                value={name}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor='email'>Email</FormLabel>
              <Input
                name="email"
                id='email'
                type="email"
                onChange={handleChange}
                value={email}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor='password'>Password</FormLabel>
              <Input
                name="password"
                id="password"
                type="password"
                onChange={handleChange}
                value={password}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor='confirm'>Confirm Password</FormLabel>
              <Input name="cofirm" id="confirm" type="password" />
            </FormControl>
            <Button type='submit' width="100%" mt='20px'>Sign up</Button>
            <Link href='/'>
              <Text textDecoration="underline" mt='10px'>Back to Home</Text>
            </Link>
          </VStack>
        </form>
        {/* </AuthFormContainer> */}



      </Box>
    </Flex>
  )
}
