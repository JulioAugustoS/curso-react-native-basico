import React from 'react'
import { TouchableOpacity } from 'react-native'
import YoutubePlayer from "react-native-youtube-iframe";

// Components
import { Container, Content, Title, Icon } from '../../components'

// Styles
import * as S from './styles'

// Images
import starImg from '../../assets/icons/star.png'

const CourseDetails = () => {
  return (
    <Container>
      <S.ContentPlayer>
        <YoutubePlayer
          height={250}
          play={false}
          videoId={"C8M94QLJy0o"}
        />
      </S.ContentPlayer>
      <Content>
        <S.InfosBase>
          <S.Infos>
            <Title size={18} weight="bold" color="green">Introdução ao React</Title>
            <Title color="gray2">Julio Augusto</Title>
            <Title color="gray2">12 hrs</Title>
          </S.Infos>
          <TouchableOpacity onPress={() => {}}>
            <Icon uri={starImg} />
          </TouchableOpacity>
        </S.InfosBase>

        <S.Section>
          <Title size={18} weight={600} color="gray2">Descrição</Title>
          <Title color="gray2">
            Aprenda a criar aplicações com NodeJs utilizando o framework Express, se conectando a bancos de dados relacionais e não relacionais, tudo isso utilizando o JavaScript do lado do servidor.
          </Title>
        </S.Section>

        <S.Section>
          <Title size={18} weight={600} color="gray2">Conteudo</Title>
        </S.Section>
      </Content>
    </Container>
  )
}

export default CourseDetails
