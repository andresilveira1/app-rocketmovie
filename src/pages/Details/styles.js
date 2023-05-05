import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 11.5rem auto;
  grid-template-areas:
    'header'
    'content';

  > main {
    grid-area: content;
    overflow-y: auto;
    padding: 4rem 12rem;
  }
`

export const Content = styled.div`
  max-width: 140rem;
  margin: 0 auto;

  display: flex;
  flex-direction: column;

  > a {
    margin-bottom: 2.4rem;

    display: flex;
    align-items: center;
    gap: 8px;

    color: ${({ theme }) => theme.COLORS.PINK};
  }

  .title {
    display: flex;
    align-items: baseline;
    gap: 2rem;

    margin-bottom: 2.4rem;

    h1 {
      font-size: 3.6rem;
      font-weight: 500;
      color: ${({ theme }) => theme.COLORS.WHITE_100};
    }

    span {
      display: flex;

      svg {
        font-size: 2rem;
      }
    }
  }

  .user {
    display: flex;
    align-items: center;
    gap: 8px;

    font-family: 'Roboto', sans-serif;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.COLORS.WHITE_100};

    margin-bottom: 4rem;

    img {
      width: 1.6rem;
      border-radius: 50%;
      border: 1px solid ${({ theme }) => theme.COLORS.PURPLE};
    }

    span {
      display: flex;
      align-items: center;
      gap: 8px;

      svg {
        color: ${({ theme }) => theme.COLORS.PINK};
        font-size: 2rem;
      }
    }
  }

  .tags {
    display: flex;
    align-items: center;
    gap: 8px;

    margin-bottom: 4rem;

    span {
      background: ${({ theme }) => theme.COLORS.BACKGROUND_700};
      padding: 0.8rem 1.6rem;
    }
  }

  > p {
    text-align: justify;
    color: ${({ theme }) => theme.COLORS.WHITE_100};
  }
`
