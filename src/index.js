import 'react-native-gesture-handler'
import React from 'react'
import { ThemeProvider } from 'styled-components'

// Routes
import Routes from './routes'

// Context
import { CoursesProvider } from './context/courses'

// Theme
import light from './theme/light'

const App = () => {
  return (
    <CoursesProvider>
      <ThemeProvider theme={light}>
        <Routes />
      </ThemeProvider>
    </CoursesProvider>
  )
}

export default App
