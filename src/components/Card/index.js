import React from 'react'
import { View, Image } from 'react-native'

const Card = ({ image }) => {
  return (
    <View>
      <Image source={image} resizeMode="contain" />
    </View>
  )
}

export default Card
