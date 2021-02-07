import styled from 'styled-components/native'

export const Container = styled.View`
  width: 100%;
  border-top-width: 1px;
  border-style: solid;
  border-top-color: ${({ theme }) => theme.colors.silver};
  margin-top: 10px;
  padding-top: 14px;
  padding-bottom: 14px;
  flex-direction: row;
`

export const BaseComment = styled.View`
  flex: 1;
  padding-left: 12px;
`
