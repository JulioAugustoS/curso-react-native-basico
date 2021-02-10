import React from 'react'

// Styles
import * as S from './styles'

const Card = ({ uri }) => {
  return (
    <S.Container>
      {/*
        Alterar o formato de recebimento no source, pois como vai vir via url a imagem
        o parametro deve ser passado dentro de uma uri
      */}
      <S.Img source={{ uri: uri }} resizeMode="contain" />
    </S.Container>
  )
}

export default Card
