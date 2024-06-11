"use client"
import { Box, Button, Flex, FormControl, FormLabel, Heading, Input, Text, VStack } from '@chakra-ui/react'
import { Field } from 'formik'
import Link from 'next/link'
import React from 'react'

export default function SignInPage() {
  return (
    <Flex className={`basePadding`} minHeight="100vh" alignItems="center" justifyContent="center">
      <Box width={{base:'100%', sm:'80%', md:'50%', lg:'35%'}} p={{base:'24px', md:'48px'}} rounded="lg" border="1px solid black">
        <Heading>Sign In</Heading>
        <form>
          <VStack mt='20px'>
            <FormControl>
              <FormLabel htmlFor='email'>Email</FormLabel>
              <Input name="email" id='email' type="email"  />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor='password'>Password</FormLabel>
              <Input name="password" id="password" type="password" />
            </FormControl>
            <Button type='submit' width="50%" mt='20px'>Sign in</Button>
            <Link href='/auth/forgot-password'>
              <Text textDecoration="underline" mt='10px'>Forgot Password</Text>
            </Link>
            <Link href='/'>
              <Text textDecoration="underline" mt='10px'>Back to Home</Text>
            </Link>
          </VStack>
        </form>



      </Box>
    </Flex>
  )
}
