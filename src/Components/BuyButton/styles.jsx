import styled from 'styled-components'

export const ButtonDefault = styled.button`
  background: ${({ theme }) => theme.colors.buttonBuy};
  color: ${({ theme }) => theme.colors.black};
  border-radius: 0.2rem;

  border: none;
  font-weight: bold;
  font-size: 1.6rem;

  height: 5rem;
  width: 15rem;

  transition: all 0.5s ease-in-out;

  &:hover {
    background: ${({ theme }) => theme.colors.button};
    color: ${({ theme }) => theme.colors.white};
    filter: brightness(1.1);
    transform: translateY(-1rem);
  }
`
