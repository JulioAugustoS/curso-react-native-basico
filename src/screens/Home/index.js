import React from 'react'

// Components
import { Container, Content, Title } from '../../components'

// Styles
import * as S from './styles'

// Images
import logoImg from '../../assets/images/logo.png'

const Home = () => {
  return (
    <Container>
      <S.Logo source={logoImg} resizeMode="contain" />
      <Content>
        <Title size={18} weight="bold" color="gray2">Desenvolvimento</Title>
      </Content>
    </Container>
  )
}

export default Home
