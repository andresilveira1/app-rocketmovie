import styled from 'styled-components'

import backgroundImg from '../../assets/background.png'

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`

export const Form = styled.form`
  padding: 0 13.5rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: start;

  > h1 {
    font-size: 4.8rem;
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  > p {
    font-size: 1.4rem;
    color: ${({ theme }) => theme.COLORS.LAVANDER_100};

    margin-bottom: 4.8rem;
  }

  > h2 {
    font-size: 2.4rem;
    color: ${({ theme }) => theme.COLORS.WHITE_100};

    margin-bottom: 4.8rem;
  }

  > :nth-child(4) {
    margin-bottom: 8px;
  }

  > button {
    margin-top: 2.4rem;
  }

  > a {
    margin-top: 3.4rem;
    color: ${({ theme }) => theme.COLORS.PINK};
    align-self: center;
  }
`

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
`
