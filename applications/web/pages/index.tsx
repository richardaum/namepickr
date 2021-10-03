import { Box, Container } from '@chakra-ui/react'
import React from 'react'

import { Headline } from '../modules/index/Headline'

const Index = () => {
  return (
    <Container maxW="container.xl">
      <Box mt="24">
        <Headline />
      </Box>
    </Container>
  )
}

export default Index
