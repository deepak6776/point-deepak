import { Flex, Text} from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'

export default function FeaturedCard() {
  return (
    <Flex mt='32px' direction={{base:'column-reverse', md:'row'}} borderRadius="32px" padding="24px" alignItems='center' gap='48px' bgColor="#e8eefd">
      <Flex direction="column" justifyContent='center' gap='24px' width={{base:'100%'}}>
        <Flex direction='column'>
          <Text fontSize="30px" fontWeight='600'>Sujay Joshi</Text>
          <Text fontSize="20px">Principal Designer at <Text as='span' fontWeight="600">Lokusdesign</Text></Text>
        </Flex>
        <Text>
          Sujay Joshi is a Spatial Experience Designer and proud NID alumnus. At Lokusdesign, he leads a visionary team dedicated to crafting memorable museums and exhibition spaces. Sujay believes in creating spaces that convey powerful stories. When not at work, he enjoys mountain climbing, gaming, and origami.
        </Text>
        <Flex gap='12px'>
          <Image src='/portfolioBadge.svg' width="48" height="48" alt='svg illustration of globe' />
          <Image src='/linkedinBadge.svg' width="48" height="48" alt='linkedin logo' />
        </Flex>
      </Flex>
      <Flex maxWidth="780px" maxHeight="520px" width="auto" height="auto">
        <Image src='/dummyImage.png' width='780' height="520" alt="profile photo" />
      </Flex>
      
    </Flex>
  )
}
