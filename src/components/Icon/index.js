import React from 'react'
import { Image } from 'react-native'

const Icon = ({ uri }) => {
  return <Image source={uri} resizeMode="contain" />
}

export default Icon
