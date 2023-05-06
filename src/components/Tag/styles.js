import styled from 'styled-components'

export const Container = styled.span`
  background: ${({ theme }) => theme.COLORS.BACKGROUND_600};
  border-radius: 0.8rem;

  font-family: 'Roboto', sans-serif;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.COLORS.GRAY_100};
`
