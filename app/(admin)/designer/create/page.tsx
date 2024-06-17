import DesignerCreate from '@/app/components/ui/DesignerCreate'
import DesignerCreateCard from '@/app/components/ui/DesignerCreate'
import { Flex, Text} from '@chakra-ui/react'
import React from 'react'

export default function BlogCreate() {
  return (
    <Flex  direction='column' alignItems="center" height='100vh' width="80%" ml='auto' p='32px'>
      <Text>Create Blog</Text>
      <DesignerCreate />

    </Flex>
  )
}
