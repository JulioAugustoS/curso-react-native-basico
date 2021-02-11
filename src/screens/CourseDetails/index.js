import React, { useEffect, useState } from 'react'
import { TouchableOpacity } from 'react-native'
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
  Comment
} from '../../components'

// Styles
import * as S from './styles'

// Images
import starImg from '../../assets/icons/star.png'
import checkImg from '../../assets/icons/check.png'
import circleImg from '../../assets/icons/circle.png'
import chevronLeftImg from '../../assets/icons/chevron-left.png'

const CourseDetails = ({ navigation }) => {
  const { params } = useRoute()
  const [course, setCourse] = useState(null)

  const findCourse = async () => {
    try {
      const res = await api.get(`/courses/${params.id}?_embed=comments`)

      console.log("RETORNO DO CURSO: ", res)
      setCourse(res.data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    findCourse()
  }, [])

  console.log("CURSO: ", course)

  return (
    <Container>
      <S.ContentPlayer>
        <S.BackButton onPress={() => navigation.goBack()}>
          <Icon uri={chevronLeftImg} />
        </S.BackButton>
        <YoutubePlayer
          height={250}
          play={false}
          videoId={"C8M94QLJy0o"}
        />
      </S.ContentPlayer>
      <Content>
        <S.InfosBase>
          <S.Infos>
            <Title size={18} weight="bold" color="green">{course?.content[0].title}</Title>
            <Title size={16} color="gray2">{course?.teacher}</Title>
            <Title color="gray2">{`${course?.duration} hrs`}</Title>
          </S.Infos>
          <TouchableOpacity onPress={() => {}}>
            <Icon uri={starImg} />
          </TouchableOpacity>
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
              <ItemList key={index} icon={checkImg} text={module?.title} />
            ))}
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
