import AffliateTable from '@/app/components/AffliateTable'
import BlogTable from '@/app/components/BlogTable'
import { Flex } from '@chakra-ui/react'
import React from 'react'

export default function Affliate() {
  
  const lproducts = {
    id: "string",
    title: "string",
    thumbnail: "string",
    description: "string",
    price: {
      mrp: 23,
      salePrice: 25,
      saleOff: 25,
    },
    category: "string",
    quantity: 36
  }
  return (
    <div>
      <Flex height='100vh' width="80%" ml='auto' p='32px'>

        <div className="flex py-4 space-y-4">
          <div className="border-r border-gray-700 p-4 space-y-4">
            <AffliateTable
            // products={lproducts}
            // currentPageNo={0} 
            // hasMore={false} 
            />
          </div>
        </div>
      </Flex>


    </div>
  )
}