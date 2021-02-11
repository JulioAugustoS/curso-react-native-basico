import React, { useEffect, useState } from 'react'
import { Alert } from 'react-native'
import { useRoute } from '@react-navigation/native'
import YoutubePlayer from "react-native-youtube-iframe";

// Api
import api from '../../config/api'

// Components
import {
  Container,
  Content,
  Title,
  Icon,
  ItemList,
  TextArea,
  Button,
  Comment,
  Loading
} from '../../components'

// Styles
import * as S from './styles'

// Images
import checkImg from '../../assets/icons/check.png'
import checkedImg from '../../assets/icons/checked.png'
import circleImg from '../../assets/icons/circle.png'
import chevronLeftImg from '../../assets/icons/chevron-left.png'

const CourseDetails = ({ navigation }) => {
  const { params } = useRoute()
  const [course, setCourse] = useState(null)
  const [moduleSelect, setModuleSelect] = useState(null)
  const [comment, setComment] = useState('')
  const [loading, setLoading] = useState(true)

  /**
   * 01 - Crie essa função primeiro para trazer os dados do curso pelo ID
   */
  const findCourse = async () => {
    try {
      const res = await api.get(`/courses/${params.id}?_embed=comments`)

      setCourse(res.data)
      setModuleSelect(res.data?.content[0])
      setLoading(false)
    } catch (err) {
      console.log("Error find course: ", err)
      setLoading(false)
    }
  }

  /**
   * 02 - Execute a função com um timeout de 1s para simular uma requisição a um servidor
   */
  useEffect(() => {
    setTimeout(() => {
      findCourse()
    }, 1000)
  }, [])

  /**
   * 03 - Crie essa função para enviar os dados do campo de comentario para a api
   */
  const handleSendComment = async () => {
    if (!comment) {
      return Alert.alert('Preencha o campo de comentário para continuar!')
    }

    setLoading(true)

    try {
      await api.post('/comments', {
        body: comment,
        courseId: params.id
      })

      findCourse()
      setComment('')
      setLoading(false)
      Alert.alert('Tudo Certo!', 'Seu comentário foi adicionado com sucesso!')
    } catch (err) {
      console.log("Error Send Comment: ", err.response)
      setLoading(false)
    }
  }

  return (
    <Container>
      {loading && <Loading />}
      <S.ContentPlayer>
        <S.BackButton onPress={() => navigation.goBack()}>
          <Icon uri={chevronLeftImg} />
        </S.BackButton>
        <YoutubePlayer
          height={250}
          play={false}
          // 06 - Adicione o valor do video que está armazenado no estado de module select
          videoId={moduleSelect?.video}
        />
      </S.ContentPlayer>
      <Content>
        <S.InfosBase>
          <S.Infos>
            <Title size={18} weight="bold" color="green">{moduleSelect?.title}</Title>
            <Title size={16} color="gray2">{course?.teacher}</Title>
            <Title color="gray2">{`${course?.duration} hrs`}</Title>
          </S.Infos>
        </S.InfosBase>

        <S.Section>
          <Title size={18} weight={600} color="gray2">Descrição</Title>
          <Title size={16} color="gray3">
            {course?.description}
          </Title>
        </S.Section>

        <S.Section>
          <Title size={18} weight={600} color="gray2">Conteudo</Title>
          <S.List>
            {course?.content.map((module, index) => (
              <ItemList
                key={index}
                // 04 - Faça uma verificação para exibir o icone de acordo com o item selecionado
                icon={moduleSelect?.title === module?.title ? checkedImg : checkImg}
                text={module?.title}
                // 05 - Adicione uma ação para salvar no estado o modulo selecionado
                onPress={() => setModuleSelect(module)}
              />
            ))}
          </S.List>
        </S.Section>

        <S.Section>
          <Title size={18} weight={600} color="gray2">Comentários</Title>
          <TextArea
            multiline={true}
            numberOfLines={5}
            onChangeText={(e) => setComment(e)}
            value={comment}
            placeholder="Deixe seu comentário"
          />
          <S.ButtonContent>
            <Button title="Publicar" onPress={() => handleSendComment()} />
          </S.ButtonContent>
        </S.Section>

        <S.Section>
          <Title color="black">{`${course?.comments.length} comentários neste curso`}</Title>
          {course?.comments.map((comment) => (
            <Comment
              key={comment.id}
              photo={circleImg}
              comment={comment.body}
            />
          ))}
        </S.Section>
      </Content>
    </Container>
  )
}

export default CourseDetails
