import styles from './Hero.module.css'
import { FormStyle, HeroTitleStyle } from './styles'

const Hero = () => (
  <FormStyle>
    <div className="container">
      <HeroTitleStyle>
        As melhores vagas para tecnologia, design e artes visuais.
      </HeroTitleStyle>
    </div>
  </FormStyle>
)

export default Hero
