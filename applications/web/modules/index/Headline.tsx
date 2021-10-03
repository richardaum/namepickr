import { Box, Heading, useTheme } from '@chakra-ui/react'

import { TextBackground } from '../../components/TextBackground'
import { ApplicationTheme } from '../../ui'

const textGradient = (color1: string, color2: string) =>
  `linear-gradient(to right, ${color1} 0%, ${color2} 100%)`

export const Headline = () => {
  const theme = useTheme<ApplicationTheme>()

  const textProps = {
    lineHeight: 'inherit',
    fontWeight: 'normal',
    textAlign: 'center',
    whiteSpace: 'pre-wrap',
  } as const

  return (
    <Box lineHeight="none">
      <Heading {...textProps} fontFamily="display" as="h1" fontSize="120px">
        <TextBackground
          bg={textGradient(
            theme.colors.brightPink[500],
            theme.colors.brightPurple[500]
          )}
        >
          a collaborative way
        </TextBackground>

        <TextBackground
          bg={textGradient(
            theme.colors.brightBlue[500],
            theme.colors.brightGreen[500]
          )}
        >
          to draw a name
        </TextBackground>
      </Heading>

      <Heading
        {...textProps}
        fontFamily="handwriting"
        as="h2"
        size="xl"
        color="gray.700"
      >
        from a top hat
      </Heading>
    </Box>
  )
}
