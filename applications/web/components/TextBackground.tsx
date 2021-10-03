import { Box, BoxProps } from '@chakra-ui/react'
import React, { FC } from 'react'

export const TextBackground: FC<BoxProps> = ({ children, ...props }) => (
  <Box {...props} backgroundClip="text">
    {children}
  </Box>
)
