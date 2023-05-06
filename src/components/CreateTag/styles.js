import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;

  padding: 1.6rem;

  background: ${({ theme, isNew }) =>
    isNew ? 'transparent' : theme.COLORS.BACKGROUND_800};

  color: ${({ theme }) => theme.COLORS.WHITE};

  border: ${({ theme, isNew }) =>
    isNew ? `2px dashed ${theme.COLORS.LAVANDER_200}` : 'none'};
  border-radius: 1rem;

  > input {
    width: 100%;

    font-family: 'Roboto', sans-serif;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;

    border: none;
  }

  > button {
    border: none;
    background: none;

    display: flex;

    font-size: 2.4rem;
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`
