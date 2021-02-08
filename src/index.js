import React from 'react'
import { ThemeProvider } from 'styled-components'

// Theme
import light from './theme/light'

// Screens
import Home from './screens/Home'
import CourseDetails from './screens/CourseDetails'

const App = () => {
  return (
    <ThemeProvider theme={light}>
      {/* <Home /> */}
      <CourseDetails />
    </ThemeProvider>
  )
}

export default App
