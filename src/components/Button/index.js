import React from 'react'
import { TouchableOpacity } from 'react-native'

// Components
import { Title } from '../index'

const Button = ({ title, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Title text={title} />
    </TouchableOpacity>
  )
}

export default Button
