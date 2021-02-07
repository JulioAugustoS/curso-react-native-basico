import React from 'react'
import { View } from 'react-native'

// Components
import { Title } from '../index'

const Course = ({ image, title, time }) => {
  return (
    <View>
      <Title text={title} />
      <View>
        <Title text={`${time} hrs`} />
      </View>
    </View>
  )
}

export default Course
