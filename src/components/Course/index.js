import React from 'react'
import { View } from 'react-native'

// Components
import { Title, Tag, Card } from '../index'

const Course = ({ image, title, nivel, time }) => {
  return (
    <View>
      <Card uri={image} />
      <View>
        <Title text={title} />
        <View>
          <Tag text={nivel} />
          <Title text={`${time} hrs`} />
        </View>
      </View>
    </View>
  )
}

export default Course
