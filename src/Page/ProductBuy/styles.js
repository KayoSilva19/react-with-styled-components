import { styled } from 'styled-components'

export const ContainerWrapper = styled.main`
  height: 100vh;

  display: grid;
  grid-template-rows: max-content;
  justify-content: center;

  color: ${({ theme }) => theme.colors.text};
  padding: 0 5rem;
`
export const Container = styled.div`
  max-height: 60rem;
  display: flex;
  margin-top: 7rem;
  gap: 3rem;
  align-items: center;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`
export const Product = styled.img`
  animation: floating 3s forwards alternate infinite linear;

  @keyframes floating {
    from {
      transform: translatey(0);
    }

    50% {
      transform: translateY(-15%);
    }
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`
export const ContainerBuy = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 70rem;
  gap: 3rem;

  > p {
    font-size: 1.8rem;
    line-height: 3rem;
  }

  @media (max-width: 768px) {
    > p {
      font-size: 1.6rem;
      line-height: 2.6rem;
    }
  }
`
