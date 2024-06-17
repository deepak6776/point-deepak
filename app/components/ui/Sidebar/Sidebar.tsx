"use client";
import { Box, Flex } from '@chakra-ui/react'
import Image from 'next/image'
import SideBarItem from '../SideBarItem'
import Link from 'next/link'
import React, { ReactNode } from 'react';
import SignOutButton from '../../SignOutButton';

interface Props {
  children: ReactNode;
}

export default function Sidebar({ children }: Props) {
  return (
    <>
      <Box as='aside' width={{ md: '25%', lg: '20%' }} height="100vh" position='fixed' bgColor="#E5EBF8" display={{ base: 'none', md: 'block' }} p='32px' >
        <Flex mb='60px' width='100%' >
          <Image src="/logo.svg" width="88" height="32" alt="Point logo" />
        </Flex>
        <Flex direction="column" height="85%">
          <Link href="/dashboard">
            <SideBarItem icon='/barGraph.svg' item="Dashboard" />
          </Link>
          <Link href="/sources">
            <SideBarItem icon='/barGraph.svg' item="Sources" />
          </Link>
          <Link href="/affliate">
            <SideBarItem icon='/pencil.svg' item="Affliate" />
          </Link>
          <Link href="/blog">
            <SideBarItem icon='/drop.svg' item="Blog" />
          </Link>
          <Link href="/designer">
            <SideBarItem icon='/book.svg' item="Designers" />
          </Link>
          <SideBarItem icon='/barGraph.svg' item="Profile" />
          <Flex mt='auto'>
            <SignOutButton>
              <SideBarItem icon='/logout.svg' item="Log out" />
            </SignOutButton>
          </Flex>

        </Flex>
      </Box>
      {children}
    </>
  )
}
