import React from 'react'
import { View } from 'react-native'

// Components
import { Icon, Title } from '../index'

const ItemList = ({ icon, text }) => {
  return (
    <View>
      <Icon uri={icon} />
      <View>
        <Title text={text} />
      </View>
    </View>
  )
}

export default ItemList
