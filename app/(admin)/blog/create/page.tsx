import BlogCreateCard from '@/app/components/ui/BlogCreate'
import { Flex, Text} from '@chakra-ui/react'
import React from 'react'

export default function BlogCreate() {
  return (
    <Flex  direction='column' alignItems="center" height='100vh' width="80%" ml='auto' p='32px'>
      <Text>Create Blog</Text>
      <BlogCreateCard />

    </Flex>
  )
}
