import React from 'react'
import { View } from 'react-native'

// Components
import { Title } from '../index'

const Tag = ({ text }) => {
  return (
    <View>
      <Title text={text} />
    </View>
  )
}

export default Tag
