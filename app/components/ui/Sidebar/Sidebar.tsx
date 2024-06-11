import { Box, Flex } from '@chakra-ui/react'
import Image from 'next/image'
import SideBarItem from '../SideBarItem'
import Link from 'next/link'


export default function Sidebar() {
  return (
    <Box as='aside' width={{md:'25%', lg:'20%'}} height="100vh" position='fixed' bgColor="#E5EBF8" display={{base:'none', md:'block'}} p='32px' >
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
        <SideBarItem icon='/barGraph.svg' item="Profile" />
        <Flex mt='auto'>
          <SideBarItem icon='/logout.svg' item="Log out" />
        </Flex>
      </Flex>
   </Box>
  )
}
