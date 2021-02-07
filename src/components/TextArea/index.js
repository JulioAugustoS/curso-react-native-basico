import styled from 'styled-components/native'

const TextArea = styled.TextInput`
  width: 100%;
  height: 75px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.silver};
  border-style: solid;
  border-radius: 8px;
  padding: 10px;
  margin-top: 14px;
  margin-bottom: 14px;
`

export default TextArea
