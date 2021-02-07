import React from 'react'

// Components
import { Container } from '../../components'

// Styles
import * as S from './styles'

// Images
import logoImg from '../../assets/images/logo.png'

const Home = () => {
  return (
    <Container>
      <S.Logo source={logoImg} resizeMode="contain" />
    </Container>
  )
}

export default Home
