import * as React from 'react'
// @ts-ignore
import { ThemeProvider } from 'styled-components'
import { ThemeProviderProps } from 'Interfaces/Interfaces'

const Theme: React.FC<ThemeProviderProps> = ({ children, themeMode }) => (
  <ThemeProvider theme={themeMode} >{children}</ThemeProvider>
)

export default Theme
