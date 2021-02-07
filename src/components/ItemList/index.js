import React from 'react'

// Components
import { Icon, Title } from '../index'

// Styles
import * as S from './styles'

const ItemList = ({ icon, text }) => {
  return (
    <S.Container>
      <Icon uri={icon} />
      <S.Desc>
        <Title size={16} color="gray3">{text}</Title>
      </S.Desc>
    </S.Container>
  )
}

export default ItemList
