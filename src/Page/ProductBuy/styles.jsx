import { styled } from 'styled-components'

export const ContainerWrapper = styled.main`
  background-color: ${({ theme }) => theme.colors.background};
  height: 100vh;

  display: grid;
  grid-template-rows: max-content;
  justify-content: center;

  color: ${({ theme }) => theme.colors.text};
`
export const Container = styled.div`
  max-height: 60rem;
  display: flex;
  margin-top: 10rem;
  align-items: center;
`
export const Product = styled.img`
  @keyframes
`
export const ContainerBuy = styled.section`
  display: flex;
  flex-direction: column;
  gap: 3rem;

  max-width: 70rem;

  > p {
    font-size: 1.8rem;
    line-height: 3rem;
  }
`
