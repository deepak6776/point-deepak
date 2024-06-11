import { Button, Flex, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react"
import Link from "next/link"

export default function Sources() {
 const items = [
    {title:"Atlassian Design System", category:"Design Guidelines", model:"free"},
    {title:"Ant Design System", category:"Design Guidelines", model:"free"},
    {title:"Fluid Design System", category:"Design Guidelines", model:"free"},
    {title:"Apple Design System", category:"Design Guidelines", model:"free"}
  ]

  return (
    <Flex height='100vh' width="80%" ml='auto' p='32px' direction="column" gap="20px">
      <Flex width="100%" height="max-content" alignItems="center">
        <Text mr="auto">Sources</Text>
        <Link href="sources/create">
         <Button>Add Item</Button>
        </Link>
      </Flex>
      <TableContainer >
        <Table>
          <Thead>
            <Tr fontWeight="500" bgColor="gray.200">
              <Th>Title</Th>
              <Th>Category</Th>
              <Th>Model</Th>
            </Tr>

          </Thead>
          <Tbody>
            {items.map((item)=> {
              return <Tr>
                <Td>{item.title}</Td>
                <Td>{item.category}</Td>
                <Td>{item.model}</Td>
              </Tr>
            })}
          </Tbody>
        </Table>
      </TableContainer>

    </Flex>
  )
}
