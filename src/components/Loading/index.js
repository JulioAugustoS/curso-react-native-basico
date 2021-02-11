import React from 'react'
import { ActivityIndicator } from 'react-native'

// Styles
import * as S from './styles'

// Components
import { Title } from '../index'

const Loading = () => {
  return (
    <S.Container>
      <ActivityIndicator
        size="large"
        color="#FFF"
      />
      <Title size={18} color="white" weight="bold">
        Carregando...
      </Title>
    </S.Container>
  )
}

export default Loading
