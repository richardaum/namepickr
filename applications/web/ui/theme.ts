import { extendTheme, Theme, withDefaultColorScheme } from '@chakra-ui/react'

import { colors } from './colors'
import { components } from './components'
import { config } from './config'
import { fonts } from './fonts'
import { styles } from './styles'

export type ApplicationTheme = Theme & {
  colors: typeof colors
  fonts: typeof fonts
}

export const theme = extendTheme(
  { styles, config, colors, components, fonts },
  withDefaultColorScheme({ colorScheme: 'brand' })
) as ApplicationTheme
