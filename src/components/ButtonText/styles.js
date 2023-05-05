import styled from 'styled-components'

export const Container = styled.button`
  background: none;
  color: ${({ theme }) => theme.COLORS.PINK};

  border: none;
  font-size: 1.6rem;
  font-weight: 400;

  display: flex;
  align-items: center;
  gap: 8px;

  width: 7rem;
`
