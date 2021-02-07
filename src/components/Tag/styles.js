import styled from 'styled-components/native'

export const Container = styled.View`
  max-width: 80px;
  height: 20px;
  background-color: ${({ theme }) => theme.colors.gray1};
  border-radius: 2px;
  justify-content: center;
  align-items: center;
`
