import React, { useState, useEffect } from 'react'
import { View } from 'react-native'
import list from './courses.json'

// Context
import { useCourses } from '../../context/courses'

// Components
import { Container, Content, Title, Course } from '../../components'

// Styles
import * as S from './styles'

// Images
import logoImg from '../../assets/images/logo.png'

const Home = () => {
  /** Desestruture o useCourses() para ter acesso ao estado e a função de atualizar
   * o estado no contexto
   */
  const { coursesList, setCoursesList } = useCourses()

  /**
   * Criar o estado com o valor incial sendo um Array vazio
   */
  // const [coursesList, setCoursesList] = useState([])

  /**
   * Executar o useEffect quando o componente for montado atualizando o estado com os dados dos cursos
   */
  useEffect(() => {
    setTimeout(() => {
      setCoursesList(list.categories);
    }, 1000);
  }, []);

  /**
   * Adicionar um console.log para mostrar o estado atualizado
   */
  console.log("Lista de Cursos: ", coursesList)

  return (
    <Container>
      <S.Logo source={logoImg} resizeMode="contain" />

      {/* Mapear o estado de cursos para renderizar as categorias na tela */}
      {coursesList.map((item, index) => (
        /** Adicionar o index como unic key no componente View */
        <View key={index}>
          <Content>
            {/* Substituir o nome do curso pela variavel referente ao nome retornado pelo map */}
            <Title size={18} weight="bold" color="gray2">{item.category}</Title>
          </Content>
          <S.Swipper>
            {/* Mapear o array courses dentro do item para listar os cursos */}
            {item.courses.map((course) => (
              /** Substituir os dados do curso pelos dados retornado no map */
              <Course
                key={course.id}
                image={course.logo}
                title={course.name}
                time={course.duration}
                nivel={course.level}
              />
            ))}
          </S.Swipper>
        </View>
      ))}
    </Container>
  )
}

export default Home
