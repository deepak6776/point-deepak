"use client"
import React from 'react'
import { Flex, Text } from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'

export default function ViewDesigners() {
  return (
    <Flex alignItems="center" gap='12px'>
      <Text>View all designers</Text>
      <ArrowForwardIcon boxSize="24px" color="#BBD4F6" />
    </Flex>
  )
}
