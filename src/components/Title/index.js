import styled from 'styled-components/native'

const Title = styled.Text`
  font-size: ${({ size }) => size || 14}px;
  font-weight: ${({ weight }) => weight || 'normal'};
  color: ${({ theme, color }) => color && theme.colors[color] || theme.colors.black};
`

export default Title
