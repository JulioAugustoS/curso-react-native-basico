import React, { useState, useEffect } from 'react'
import { View } from 'react-native'
import list from './courses.json'

// Api
import api from '../../config/api'

// Context
import { useCourses } from '../../context/courses'

// Components
import { Container, Content, Title, Course } from '../../components'

// Styles
import * as S from './styles'

// Images
import logoImg from '../../assets/images/logo.png'

const Home = ({ navigation }) => {
  const { coursesList, setCoursesList } = useCourses()

  const findCourses = async () => {
    try {
      const res = await api.get('/categories?_embed=courses')

      console.log("RETORNO DA CONSULTA: ", res)
      setCoursesList(res.data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    findCourses()
  }, []);

  console.log("Lista de Cursos: ", coursesList)

  return (
    <Container>
      <S.Logo source={logoImg} resizeMode="contain" />
      {coursesList.map((item, index) => (
        <View key={index}>
          <Content>
            <Title size={18} weight="bold" color="gray2">{item.category}</Title>
          </Content>
          <S.Swipper>
            {item.courses.map((course) => (
              <Course
                key={course.id}
                image={course.logo}
                title={course.name}
                time={course.duration}
                nivel={course.level}
                onPress={() => navigation.navigate('CourseDetail', { id: course.id })}
              />
            ))}
          </S.Swipper>
        </View>
      ))}
    </Container>
  )
}

export default Home
