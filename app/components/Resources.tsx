import { Flex, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import ResourceCard from './ui/ResourceCard'
import ProductCard from './ui/ProductCard'

export default async function Resources() {
  const categories = [
    {slug:"test1", 
      key:"test1", 
      coverImage: "/book.svg",
      title:"test1",
      description:"test1"
    },
    {slug:"test2", 
      key:"test2", 
      coverImage: "/pencil.svg",
      title:"test2",
      description:"test2"
    },
    {slug:"test3", 
      key:"test3", 
      coverImage: "/drop.svg",
      title:"test3",
      description:"test3"
    }
  ]
  return (
   <Flex className={`basePadding`} direction="column" id='resources'>
    <Text className={`subheading`}>What are you looking for today?</Text>
    <SimpleGrid columns={{base:1, md:2, lg:3}} gap='42px'>
     {categories.map((category) => {
      return <ResourceCard link={category.slug} key={category.slug} src={category.coverImage? category.coverImage: ""} heading={category.title} text={category.description}/>
     })}
    </SimpleGrid>
   </Flex>
  )
}


