import styled from 'styled-components/native'
import { Platform } from 'react-native'

export const ContentPlayer = styled.View`
  margin-top: ${Platform.OS === 'ios' ? 10 : 0}px;
`

export const BackButton = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  position: absolute;
  z-index: 10;
  top: 18px;
  left: 14px;
  justify-content: center;
`

export const InfosBase = styled.View`
  flex-direction: row;
  justify-content: space-between;
`

export const Infos = styled.View``

export const Section = styled.View`
  margin-top: 30px;
`

export const List = styled.View`
  margin-top: 14px;
`

export const ButtonContent = styled.View`
  align-items: flex-end;
`
