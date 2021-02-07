import React from 'react'

// Components
import { Title } from '../index'

// Styles
import * as S from './styles'

const Button = ({ title, onPress, size }) => {
  return (
    <S.Container onPress={onPress} size={size}>
      <Title size={16} weight="bold" color="white">{title}</Title>
    </S.Container>
  )
}

export default Button
