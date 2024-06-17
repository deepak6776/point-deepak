import AffliateCreate from '@/app/components/ui/AffliateCreate'
import AffliateCreateCard from '@/app/components/ui/AffliateCreate'
import { Flex, Text} from '@chakra-ui/react'
import React from 'react'

export default function BlogCreate() {
  return (
    <Flex  direction='column' alignItems="center" height='100vh' width="80%" ml='auto' p='32px'>
      <Text>Create Blog</Text>
      <AffliateCreate />

    </Flex>
  )
}
