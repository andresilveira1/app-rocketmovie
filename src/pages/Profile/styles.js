import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;

  > header {
    width: 100%;
    height: 144px;

    padding: 6rem 14.4rem;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

    a {
      display: flex;
      align-items: center;
      gap: 8px;

      color: ${({ theme }) => theme.COLORS.PINK};
    }
  }
`

export const Form = styled.form`
  max-width: 34rem;

  margin: 0 auto;

  > :nth-child(2),
  > :nth-child(4) {
    margin-bottom: 8px;
    color: ${({ theme }) => theme.COLORS.LAVANDER_200};
  }

  > :nth-child(3),
  > :nth-child(5) {
    margin-bottom: 2.4rem;
    color: ${({ theme }) => theme.COLORS.LAVANDER_200};
  }

  > button {
    height: 4.8rem;
  }
`

export const Avatar = styled.div`
  position: relative;
  margin: -9rem auto 6.4rem;

  height: 18.6rem;
  width: 18.6rem;

  > img {
    height: 18.6rem;
    width: 18.6rem;
    border-radius: 50%;
  }

  > label {
    position: absolute;
    bottom: 5px;
    right: 5px;

    width: 4.8rem;
    height: 4.8rem;

    background: ${({ theme }) => theme.COLORS.PINK};
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;

    svg {
      color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
      font-size: 2rem;
    }

    input {
      display: none;
    }
  }
`
