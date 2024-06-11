"use client"
import { Button, IconButton, Box} from '@chakra-ui/react'
import Link from 'next/link'
import { ArrowBackIcon } from '@chakra-ui/icons'

export default function BackButton() {
  return (
    
    <Box width="max-content">
      <Link href="/">
        <IconButton
          bgColor="rgba(255,255,255,0.5)"
          _hover={{bgColor:'rgba(255,255,255,0.8)'}}
          icon={<ArrowBackIcon />}
          aria-label='Go back'
          size="lg" />
      </Link>
    </Box>
  )
}
