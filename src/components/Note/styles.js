import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled(Link)`
  height: 22rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 3.2rem;
  margin-top: 2.4rem;

  border: none;
  border-radius: 1.6rem;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  > div {
    display: flex;
    align-self: start;
    align-items: start;
    flex-direction: column;
    gap: 8px;

    margin-bottom: 1.5rem;

    h1 {
      font-size: 2.4rem;
      color: ${({ theme }) => theme.COLORS.WHITE_100};
    }

    svg {
      font-size: 1.2rem;
      margin-right: 6px;
    }
  }

  > p {
    font-family: 'Roboto', sans-serif;
    line-height: 1.9rem;

    color: ${({ theme }) => theme.COLORS.GRAY_200};

    text-align: justify;

    margin-bottom: 2rem;

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  > footer {
    align-self: flex-start;

    span {
      padding: 5px 1.6rem;
      font-size: 1.2rem;
      margin-right: 8px;
    }
  }
`
