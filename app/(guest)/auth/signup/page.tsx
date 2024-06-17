"use client"
import AuthFormContainer from '@/app/components/AuthFormContainer'
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Box, Button, Flex, FormControl, FormLabel, Heading, Input, Text, VStack } from '@chakra-ui/react'
import { useFormik } from 'formik'
import Link from 'next/link'
import * as yup from 'yup'
import { filterFormikErrors } from '@/app/utils/formikHelpters';
import { toast } from 'react-toastify';
import { signIn } from 'next-auth/react';


const validationSchema = yup.object().shape({
  name: yup.string().required("Name is required!"),
  email: yup.string().email("Invalid email!").required("Email is required!"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters.")
    .required("Password is required!"),
  // cpassword: yup
  //   .string()
  //   .required("Please confirm your password")
  //   .oneOf([yup.ref('password')], "Passwords don't match.")
});

export default function SignUpPage() {
  const { values, handleChange, handleBlur, handleSubmit,
    isSubmitting, errors, touched } = useFormik({
      initialValues: { name: '', email: '', password: '', cpassword: '' },
      validationSchema,
      onSubmit: async (values, action) => {
        // console.log(values);
        action.setSubmitting(true);
        const res = await fetch("/api/users", {
          method: "POST",
          body: JSON.stringify(values),
        });

        const { message, error } = (await res.json()) as {
          message: string;
          error: string;
        };

        if (res.ok) {
          toast.success(message);
          await signIn("credentials", { email, password });
        }
  
        if (!res.ok && error) {
          toast.error(error);
        }
        action.setSubmitting(false);
      },
    });

  const formErrors: string[] = filterFormikErrors(errors, touched, values);
  const { email, name, password, cpassword } = values;


  return (
    <Flex className={`basePadding`} minHeight="100vh" alignItems="center" justifyContent="center">
      <Box width={{ base: '100%', sm: '80%', md: '50%', lg: '35%' }} p={{ base: '24px', md: '48px' }} rounded="lg" border="1px solid black">
        <Heading>Sign Up</Heading>
        {/* <form onSubmit={handleSubmit}> */}
        <AuthFormContainer onSubmit={handleSubmit}>

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
          {/* <Input
            name="cpassword"
            id="cpassword"
            value={cpassword}
            onChange={handleChange}
            onBlur={handleBlur}

            type="password"
          /> */}
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            Sign Up
          </Button>
          <Link href='/auth/signin'>
            <Text textDecoration="underline" mt='10px'>Sign In</Text>
          </Link>
          <Link href='/'>
            <Text textDecoration="underline" mt='10px'>Back to Home</Text>
          </Link>
          <div className="">
            {formErrors.map((err) => {
              return (
                <div key={err} className="space-x-1 flex items-center text-red-500">
                  <XMarkIcon className="w-4 h-4" />
                  <p className="text-xs">{err}</p>
                </div>
              );
            })}
          </div>
        </AuthFormContainer>

        {/* </form> */}

        {/* <VStack mt='20px'>
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
          </VStack> */}




      </Box>
    </Flex>
  )
}
