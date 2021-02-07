import React from 'react'

// Styles
import * as S from './styles'

const Card = ({ uri }) => {
  return (
    <S.Container>
      <S.Img source={uri} resizeMode="contain" />
    </S.Container>
  )
}

export default Card
