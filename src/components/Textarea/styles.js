import styled from 'styled-components'

export const Container = styled.textarea`
  width: 100%;
  height: 27.4rem;

  resize: none;

  border: none;
  border-radius: 1rem;

  padding: 1.9rem 1.6rem;

  background: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  color: ${({ theme }) => theme.COLORS.WHITE_100};

  ::placeholder {
    color: ${({ theme }) => theme.COLORS.LAVANDER_200};
  }
`
