import { Flex, Heading} from '@chakra-ui/react'
import ViewDesigners from './ui/ViewDesigners'
import FeaturedCard from './ui/FeaturedCard'

export default function FeaturedSection() {
  return (
    <Flex className={`basePadding`} direction="column">
      <Flex alignItems='center' justifyContent='space-between' width="100%">
        <Heading as="h2" fontSize="48px">Featured Designer</Heading>
        <ViewDesigners />
      </Flex>
      <FeaturedCard />

    </Flex>
  )
}
