import styled from 'styled-components/native'

export const Logo = styled.Image`
  margin-top: 22px;
  margin-left: 13px;
  margin-bottom: 34px;
`;

export const Swipper = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
    paddingLeft: 13,
    paddingRight: 13,
    paddingTop: 10,
    paddingBottom: 24
  }
})``
