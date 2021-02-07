import React from 'react'

// Components
import { Title, Icon } from '../index'

// Styles
import * as S from './styles'

const Comment = ({ photo, comment }) => {
  return (
    <S.Container>
      <Icon uri={photo} />
      <S.BaseComment>
        <Title color="gray2">{comment}</Title>
      </S.BaseComment>
    </S.Container>
  )
}

export default Comment
