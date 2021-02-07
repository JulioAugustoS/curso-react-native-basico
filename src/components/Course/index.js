import React from 'react'
import { View } from 'react-native'

// Components
import { Title, Tag } from '../index'

const Course = ({ image, title, nivel, time }) => {
  return (
    <View>
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
