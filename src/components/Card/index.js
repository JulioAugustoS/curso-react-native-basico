import React from 'react'
import { View, Image } from 'react-native'

const Card = ({ uri }) => {
  return (
    <View>
      <Image source={uri} resizeMode="contain" />
    </View>
  )
}

export default Card
