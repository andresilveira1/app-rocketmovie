import styled from 'styled-components'

import backgroundImg from '../../assets/background.png'

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 0 13.5rem;

  > h1 {
    font-size: 4.8rem;
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  > p {
    font-size: 1.4rem;
    color: ${({ theme }) => theme.COLORS.LAVANDER_200};
  }

  > h2 {
    font-size: 2.4rem;
    font-weight: 500;
    color: ${({ theme }) => theme.COLORS.WHITE_100};

    margin: 4.8rem 0;
  }

  > :nth-child(4),
  > :nth-child(5) {
    margin-bottom: 8px;
  }

  > button {
    margin: 2.4rem 0 4.2rem;
  }

  > a {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    text-align: center;
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`

export const Background = styled.div`
  flex: 1;

  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
`
