import styled from 'styled-components/native'

const sizes = {
  small: '130px',
  medium: '50%',
  large: '100%'
}

export const Container = styled.TouchableOpacity`
  width: ${({ size }) => size && sizes[size] || sizes.small};
  height: 40px;
  background-color: ${({ theme }) => theme.colors.green};
  border-radius: 8px;
  justify-content: center;
  align-items: center;
`
