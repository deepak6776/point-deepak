import { Box, Flex, Text} from '@chakra-ui/react'
import styles from './productcard.module.css'

export default function ProductCard() {
  return (
    <Flex direction="column" gap="10px">
      <Flex width="100%" height="250px" bgColor="gray.500" borderRadius="8px">

      </Flex>
      <Text fontSize="20px" fontWeight='600'>Midjourney</Text>
      <Text>Gatch, brings playfulness to the genre of geometric sans-serifs.</Text>
      <Flex>
        <Box className={styles.pill}>Free</Box>
      </Flex>
    </Flex>
  )
}
