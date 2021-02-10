import styled from 'styled-components/native'

export const Container = styled.View`
  width: 130px;
  height: 180px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  elevation: 2;
`

export const Img = styled.Image`
  /* Adicionar width e height no styles da imagem */
  width: 70%;
  height: 70%;
`
