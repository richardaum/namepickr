import { Button } from '@chakra-ui/button'
import { Box } from '@chakra-ui/layout'
import { useColorMode } from '@chakra-ui/react'
import React, { VFC } from 'react'

const Room: VFC = () => {
  const { toggleColorMode } = useColorMode()

  return (
    <Box p="6">
      <Button variant="solid" onClick={toggleColorMode}>
        Change color
      </Button>
    </Box>
  )
}

export default Room
