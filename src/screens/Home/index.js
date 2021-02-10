import React, { useState, useEffect } from 'react'
import { View } from 'react-native'
import list from './courses.json'

// Components
import { Container, Content, Title, Course } from '../../components'

// Styles
import * as S from './styles'

// Images
import logoImg from '../../assets/images/logo.png'
import reactImg from '../../assets/images/react.png'
import swiftImg from '../../assets/images/swift.png'
import androidImg from '../../assets/images/android.png'
import vueImg from '../../assets/images/vue.png'
import figmaImg from '../../assets/images/figma.png'
import sketchImg from '../../assets/images/sketch.png'
import zeplinImg from '../../assets/images/zeplin.png'
import googleAdsImg from '../../assets/images/google-ads.png'
import googleAnalyticsImg from '../../assets/images/google-analytics.png'

const Home = () => {
  /**
   * Criar o estado com o valor incial sendo um Array vazio
   */
  const [coursesList, setCoursesList] = useState([])

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
      <View>
        <Content>
          <Title size={18} weight="bold" color="gray2">Desenvolvimento</Title>
        </Content>
        <S.Swipper>
          <Course image={reactImg} title="React" time={12} nivel="Iniciante" />
          <Course image={swiftImg} title="Swift" time={30} nivel="Iniciante" />
          <Course image={androidImg} title="Android" time={52} nivel="Avançado" />
          <Course image={vueImg} title="React" time={42} nivel="Avançado" />
        </S.Swipper>
      </View>
    </Container>
  )
}

export default Home
