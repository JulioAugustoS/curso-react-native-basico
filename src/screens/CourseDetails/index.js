import React from 'react'
import { TouchableOpacity } from 'react-native'
import YoutubePlayer from "react-native-youtube-iframe";

// Components
import { Container, Content, Title, Icon, ItemList, TextArea, Button } from '../../components'

// Styles
import * as S from './styles'

// Images
import starImg from '../../assets/icons/star.png'
import checkImg from '../../assets/icons/check.png'

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
            <Title size={18} weight="bold" color="green">Introdução ao NodeJS</Title>
            <Title size={16} color="gray2">Julio Augusto</Title>
            <Title color="gray2">12 hrs</Title>
          </S.Infos>
          <TouchableOpacity onPress={() => {}}>
            <Icon uri={starImg} />
          </TouchableOpacity>
        </S.InfosBase>

        <S.Section>
          <Title size={18} weight={600} color="gray2">Descrição</Title>
          <Title size={16} color="gray3">
            Aprenda a criar aplicações com NodeJs utilizando o framework Express, se conectando a bancos de dados relacionais e não relacionais, tudo isso utilizando o JavaScript do lado do servidor.
          </Title>
        </S.Section>

        <S.Section>
          <Title size={18} weight={600} color="gray2">Conteudo</Title>
          <S.List>
            <ItemList icon={checkImg} text="Introdução do NodeJS" />
            <ItemList icon={checkImg} text="Donwload e instalação do NodeJS" />
            <ItemList icon={checkImg} text="Executando arquivos JavaScript no Node" />
            <ItemList icon={checkImg} text="Respondendo requisições HTTP com Node" />
            <ItemList icon={checkImg} text="Visão geral do NPM, Express e Nodemon" />
          </S.List>
        </S.Section>

        <S.Section>
          <Title size={18} weight={600} color="gray2">Comentários</Title>
          <TextArea
            multiline={true}
            numberOfLines={5}
            placeholder="Deixe seu comentário"
          />
          <S.ButtonContent>
            <Button title="Publicar" onPress={() => {}} />
          </S.ButtonContent>
        </S.Section>
      </Content>
    </Container>
  )
}

export default CourseDetails
