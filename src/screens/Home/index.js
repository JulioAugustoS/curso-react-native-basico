import React, { useEffect, useState } from 'react'
import { View } from 'react-native'

// Api
import api from '../../config/api'

// Context
import { useCourses } from '../../context/courses'

// Components
import { Container, Content, Title, Course, Loading } from '../../components'

// Styles
import * as S from './styles'

// Images
import logoImg from '../../assets/images/logo.png'

const Home = ({ navigation }) => {
  const { coursesList, setCoursesList } = useCourses()
  const [loading, setLoading] = useState(true)

  const findCourses = async () => {
    try {
      const res = await api.get('/categories?_embed=courses')

      console.log("RETORNO DA CONSULTA: ", res)
      setCoursesList(res.data)
      setLoading(false)
    } catch (err) {
      console.log(err)
      setLoading(false)
    }
  }

  useEffect(() => {
    setTimeout(() => {
      findCourses()
    }, 1000)
  }, []);

  return (
    <>
      {loading && <Loading />}
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
    </>
  )
}

export default Home
