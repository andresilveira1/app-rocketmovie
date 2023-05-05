import { Link } from 'react-router-dom'

import { Container, Profile } from './styles'

import { Input } from '../../components/Input'

export function Header() {
  return (
    <Container>
      <h1>RocketMovies</h1>
      <div className="input">
        <Input type="text" placeholder="Pesquisar pelo título" />
      </div>
      <Profile>
        <div>
          <Link to="/profile">
            André Silveira
            <img
              src="https://github.com/andresilveira1.png"
              alt="Foto do usuário"
            />
          </Link>
          <button type="button">sair</button>
        </div>
      </Profile>
    </Container>
  )
}
