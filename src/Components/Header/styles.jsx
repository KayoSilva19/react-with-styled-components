import styled from 'styled-components'

export const HeaderContainter = styled.header`
  height: 6rem;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${({ theme }) => theme.colors.background};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};

  padding: 3.6rem 12rem;
`

export const Logo = styled.img`
  height: 2.3rem;
`
export const Switchthemes = styled.button`
  padding: 1rem;
  background: ${({ theme }) => theme.colors.button};
  color: ${({ theme }) => theme.colors.text};
  border-radius: 0.3rem;

  border: none;
  font-weight: bold;

  transition: all 0.3s linear;

  &:hover {
    background: ${({ theme }) => theme.colors.buttonHover};
    filter: brightness(1.1);
    transform: scale(1.1);
  }
`
