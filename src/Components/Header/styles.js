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

  @media (max-width: 768px) {
    padding: 3.6rem 5rem;
  }
`

export const Logo = styled.img.attrs((props) => ({
  // src:
  //   props.imgTheme === 'light'
  //     ? './images/logoLight.png'
  //     : './images/logoDark.png',
  // alt: 'Logo',
}))`
  height: 3rem;
  width: 10.3rem;
  object-fit: contain;
`
export const Switchthemes = styled.button`
  padding: 0.5rem;
  background: ${({ theme }) => theme.colors.button};
  color: ${({ theme }) => theme.colors.black};
  border-radius: 0.5rem;

  border: none;

  transition: all 0.3s linear;

  &:hover {
    background: ${({ theme }) => theme.colors.buttonHover};
    filter: brightness(1.1);
    transform: scale(1.1);
  }
`
