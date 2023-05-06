import { Link } from 'react-router-dom'

import { Container, Form } from './styles'

import { RxArrowLeft } from 'react-icons/rx'

import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Textarea } from '../../components/Textarea'
import { Button } from '../../components/Button'
import { CreateTag } from '../../components/CreateTag'
import { Section } from '../../components/Section'

export function New() {
  return (
    <Container>
      <Header />
      <main>
        <Form>
          <header>
            <Link to="/">
              <RxArrowLeft />
              Voltar
            </Link>
            <Section title="Novo filme" />
          </header>
          <div className="input">
            <Input type="text" placeholder="Título" />
            <Input
              type="number"
              placeholder="Sua nota (de 0 a 5)"
              min="1"
              max="5"
            />
          </div>

          <Textarea placeholder="Observações" />

          <h2>Marcadores</h2>

          <div className="marker">
            <CreateTag value="React" />
            <CreateTag isNew placeholder="Novo marcador" />
          </div>
          <div className="button">
            <Button title="Excluir filme" />
            <Button title="Salvar alterações" />
          </div>
        </Form>
      </main>
    </Container>
  )
}
