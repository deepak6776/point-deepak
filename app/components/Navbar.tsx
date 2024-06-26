"use client"
import { Button, Flex, Box } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { clarity } from "react-microsoft-clarity";
import Signin from './ui/SignIn/SignIn'
import Signup from './ui/SignUp/SignUp'
import useAuth from '../hooks/useAuth'
import { SpinnerIcon, CheckIcon, CloseIcon } from '@chakra-ui/icons'
import SignOutButton from './SignOutButton'



export default function Navbar() {
  const { loading, loggedIn } = useAuth();
  const [scrollY, setScrollY] = useState(0)
  const [prevScroll, setPrevScroll] = useState(0)
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    clarity.init("mezi0dam4o")
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setPrevScroll(scrollY)
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll);

    if (scrollY < prevScroll) {
      setHidden(false)
    } else if (scrollY > 20 && scrollY > prevScroll) {
      setHidden(true)
    }

    return () => {
      window.removeEventListener('scroll', handleScroll)
    };


  }, [scrollY])
  return (

    <Flex as="nav" position="fixed" zIndex={4} className={`${hidden ? 'hide' : 'show'} navBg ease`}>
      <Flex className='navbar'>
        <Image src='/logo.svg' alt='point logo' width={88} height={32} priority />

        <Box ml='auto'>
          {loggedIn ? (
            <>
              <CheckIcon w={8} h={8} color='green.500' />
              <SignOutButton>
                <CloseIcon color='red.500' />
              </SignOutButton>

            </>

          ) : loading ? (
            <SpinnerIcon />
          ) : (
            <>
              <Link href='https://forms.gle/1kijCiQmd8XenfPF8' target='_blank'>
                <Button variant='outline' border='1px solid black' >Suggest a tool</Button>
              </Link>
              <Signin />
              <Signup />
            </>
          )}
          {/* <Link href='https://forms.gle/1kijCiQmd8XenfPF8' target='_blank'>
            <Button  variant='outline' border='1px solid black' >Suggest a tool</Button>
          </Link>
          <Signin />
          <Signup /> */}
        </Box>
      </Flex>
    </Flex>
  )
}
