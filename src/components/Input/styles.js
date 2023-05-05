import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  background: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  color: ${({ theme }) => theme.COLORS.WHITE_100};
  border-radius: 1rem;

  > input {
    height: 5.6rem;
    width: 100%;

    border: 0;

    padding: 1.9rem 1.6rem;

    background: transparent;
    color: ${({ theme }) => theme.COLORS.WHITE_100};

    ::-webkit-outer-spin-button,
    ::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.LAVANDER_200};
    }
  }

  > svg {
    margin-left: 1.6rem;
    color: ${({ theme }) => theme.COLORS.LAVANDER_200};
  }
`
