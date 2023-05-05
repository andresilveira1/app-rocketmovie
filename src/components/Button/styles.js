import styled from 'styled-components'

export const Container = styled.button`
  width: 100%;
  height: 5.6rem;

  font-weight: 500;
  text-align: center;

  border: none;
  border-radius: 1rem;

  background-color: ${({ theme }) => theme.COLORS.PINK};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_600};

  &:disabled {
    opacity: 0.5;
  }
`
