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
    width: 100%;
    grid-area: content;
    overflow-y: auto;
  }
`

export const Content = styled.div`
  max-width: 137rem;
  margin: 0 auto;
  overflow-y: auto;

  margin-top: 4.8rem;

  padding: 0 12rem;
  margin-bottom: 5.8rem;

  > div {
    display: flex;
    justify-content: space-between;

    padding-bottom: 1.4rem;

    h1 {
      font-size: 3.2rem;
      font-weight: 400;

      color: ${({ theme }) => theme.COLORS.WHITE};
    }

    a {
      background: ${({ theme }) => theme.COLORS.PINK};
      color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
      border: none;
      border-radius: 8px;

      padding: 1.3rem 3.2rem;

      display: flex;
      align-items: center;
      gap: 8px;

      svg {
        font-size: 2rem;
      }
    }
  }
`
