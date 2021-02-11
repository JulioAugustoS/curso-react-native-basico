import styled from 'styled-components/native'
import { Dimensions } from 'react-native'

const WIDTH = Dimensions.get('screen').width
const HEIGHT = Dimensions.get('window').height

export const Container = styled.View`
  width: ${WIDTH}px;
  height: ${HEIGHT}px;
  justify-content: center;
  align-items: center;
  background-color: rgba(0,0,0,0.5);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
`
