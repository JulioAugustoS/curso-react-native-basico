import React from 'react'

// Components
import { Title, Tag, Card } from '../index'

// Styles
import * as S from './styles'

const Course = ({ image, title, nivel, time }) => {
  return (
    <S.Container>
      <Card uri={image} />
      <S.Content>
        <Title weight="bold" color="black">{title}</Title>
        <S.Infos>
          <Tag text={nivel} />
          <Title weight="bold" color="gray3">{`${time} hrs`}</Title>
        </S.Infos>
      </S.Content>
    </S.Container>
  )
}

export default Course
