import styled from 'styled-components'

export const Container = styled.header`
  grid-area: header;

  height: 11.5rem;
  width: 100%;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.PURPLE};

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 12.3rem;

  > h1 {
    font-size: 2.4rem;
    font-weight: 700;
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  .input {
    width: 63rem;
  }
`

export const Profile = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  > div {
    display: flex;
    align-items: center;
    flex-direction: column;

    width: 100%;

    a {
      font-size: 1.4rem;
      font-weight: 700;

      color: ${({ theme }) => theme.COLORS.WHITE_100};

      display: flex;
      align-items: center;
      gap: 9px;

      height: 1.8rem;

      img {
        width: 6.4rem;
        height: 6.4rem;

        margin-top: 1.6rem;

        border: 1px solid ${({ theme }) => theme.COLORS.PURPLE};
        border-radius: 50%;
      }
    }

    button {
      width: fit-content;
      font-size: 1.4rem;
      font-weight: 400;

      background: none;
      border: none;

      color: ${({ theme }) => theme.COLORS.LAVANDER_200};
    }
  }
`
