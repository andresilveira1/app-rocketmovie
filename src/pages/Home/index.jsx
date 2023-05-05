import { Link } from 'react-router-dom'

import { Container, Content } from './styles'

import { HiOutlinePlus } from 'react-icons/hi'

import { Header } from '../../components/Header'
import { Note } from '../../components/Note'

export function Home() {
  return (
    <Container>
      <Header />
      <main>
        <Content>
          <div>
            <h1>Meus filmes</h1>
            <Link to="/New">
              <HiOutlinePlus />
              Adicionar filme
            </Link>
          </div>
          <Note
            data={{
              title: 'Interestellar',
              tags: [
                { id: '1', name: 'Ficção Científica' },
                { id: '2', name: 'Drama' },
                { id: '3', name: 'Família' }
              ]
            }}
          />
        </Content>
      </main>
    </Container>
  )
}
