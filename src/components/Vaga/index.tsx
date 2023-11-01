import { VagasStyle, VagaTituloStyle, VagaLinkStyle } from './styles'

type Props = {
  titulo: string
  localizacao: string
  nivel: string
  modalidade: string
  salarioMin: number
  salarioMax: number
  requisitos: string[]
}

const Vaga = (props: Props) => (
  <VagasStyle>
    <VagaTituloStyle>{props.titulo}</VagaTituloStyle>
    <VagasStyle>
      <li>Localizacao: {props.localizacao}</li>
      <li>Senioridade: {props.nivel}</li>
      <li>Tipo de contratacao: {props.modalidade}</li>
      <li>
        Salário: {props.salarioMin} - {props.salarioMax}
      </li>
      <li>Requisitos: {props.requisitos.join(', ')}</li>
    </VagasStyle>
    <VagaLinkStyle href="#">Ver detalhes e candidatar-se</VagaLinkStyle>
  </VagasStyle>
)

export default Vaga
