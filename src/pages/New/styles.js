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
  }
`

export const Form = styled.form`
  max-width: 113.5rem;

  margin: 4rem auto 8.5rem;

  > header {
    a {
      display: flex;
      align-items: center;
      gap: 8px;

      color: ${({ theme }) => theme.COLORS.PINK};
    }

    h1 {
      margin: 2.4rem 0 4rem;
      color: ${({ theme }) => theme.COLORS.WHITE_100};

      font-size: 3.6rem;
      font-weight: 500;
    }
  }

  .input {
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 4rem;

    margin-bottom: 4rem;
  }

  > h2 {
    margin: 4rem 0 2.4rem 0;

    font-size: 2rem;
    font-weight: 400;

    color: ${({ theme }) => theme.COLORS.GRAY_200};
  }

  .marker {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 2.4rem;

    padding: 1.6rem;
    border: none;
    border-radius: 8px;

    margin-bottom: 4rem;

    background: ${({ theme }) => theme.COLORS.BLACK};
  }

  .button {
    display: flex;
    justify-content: space-between;
    gap: 4rem;

    > :nth-child(1) {
      background: ${({ theme }) => theme.COLORS.BLACK};
      color: ${({ theme }) => theme.COLORS.PINK};
    }
  }
`
