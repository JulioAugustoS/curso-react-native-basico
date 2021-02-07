import styled from 'styled-components/native'

export const Container = styled.View`
  height: 20px;
  background-color: ${({ theme }) => theme.colors.gray1};
  border-radius: 2px;
  padding-left: 8px;
  padding-right: 8px;
  justify-content: center;
  align-items: center;
`
