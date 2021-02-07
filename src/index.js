import React from 'react'
import { ThemeProvider } from 'styled-components'

// Theme
import light from './theme/light'

// Screens
import Home from './screens/Home'

const App = () => {
  return (
    <ThemeProvider theme={light}>
      <Home />
    </ThemeProvider>
  )
}

export default App
