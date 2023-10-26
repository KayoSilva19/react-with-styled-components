import { BuyButton } from '../../Components/BuyButton'
import product from '../../assets/productImage.png'
import { ContainerWrapper, Container, Product, ContainerBuy } from './styles'

export const ProductBuy = () => {
  return (
    <ContainerWrapper>
      <Container>
        <Product src={product} />
        <ContainerBuy>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem tempore sit aut vel sed esse officiis fuga ea
            molestiae sunt laborum repudiandae eveniet, dolor voluptatibus
            suscipit nulla eaque reprehenderit? Quas molestias nam iste vero
            maxime quidem nulla deleniti dolore corrupti. Iusto nisi modi at
            voluptates molestiae consequuntur odio praesentium nam.
          </p>
          <BuyButton />
        </ContainerBuy>
      </Container>
    </ContainerWrapper>
  )
}
