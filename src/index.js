import React from 'react'
import { ThemeProvider } from 'styled-components'

// Context
import { CoursesProvider } from './context/courses'

// Theme
import light from './theme/light'

// Screens
import Home from './screens/Home'
import CourseDetails from './screens/CourseDetails'

const App = () => {
  return (
    <CoursesProvider>
      <ThemeProvider theme={light}>
        <Home />
        {/* <CourseDetails /> */}
      </ThemeProvider>
    </CoursesProvider>
  )
}

export default App
