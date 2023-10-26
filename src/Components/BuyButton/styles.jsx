import styled from 'styled-components'

export const ButtonDefault = styled.button`
  background: ${({ theme }) => theme.colors.buttonBuy};
  color: ${({ theme }) => theme.colors.black};
  border-radius: 0.2rem;

  border: none;
  font-weight: bold;
  font-size: 1.6rem;
  margin-bottom: 3.6rem;

  height: 5rem;
  width: 15rem;

  box-shadow: 1px 1px 28px -7px rgba(0, 0, 0, 0.35);
  -webkit-box-shadow: 1px 1px 28px -7px rgba(0, 0, 0, 0.35);
  -moz-box-shadow: 1px 1px 28px -7px rgba(0, 0, 0, 0.35);

  transition: all 0.5s ease-in-out;

  &:hover {
    background: ${({ theme }) => theme.colors.button};
    color: ${({ theme }) => theme.colors.white};
    filter: brightness(1.1);
    transform: translateY(-1rem);
  }
`
