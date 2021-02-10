import React, { useContext, useState, createContext } from 'react'

/**
 * Crie o contexto onde ficará armazenado os valores iniciais dos estados globais para cursos
 */
const CoursesContext = createContext({

})

/**
 * Crie o provider que será responsavel por armazenar os estados e funções que serão acessadas
 * por qualquer componente da aplicação
 */
const CoursesProvider = ({ children }) => {
  const [coursesList, setCoursesList] = useState([])

  const value = {
    coursesList,
    setCoursesList
  }

  return <CoursesContext.Provider value={value}>{children}</CoursesContext.Provider>

}

/** Crie um hook personalizado que vai te possibilitar importar todos os estados e funções
 * do provider de forma simples
 */
const useCourses = () => {
  return useContext(CoursesContext)
}

/**
 * Exporte o Provider e o hook personalizado para que possa ser importado pelos componentes
 */
export { CoursesProvider, useCourses }
