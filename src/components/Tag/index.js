import React from 'react'

// Components
import { Title } from '../index'

// Styles
import * as S from './styles'

const Tag = ({ text }) => {
  return (
    <S.Container>
      <Title color="gray3" size={11} weight="bold">{text}</Title>
    </S.Container>
  )
}

export default Tag
