import { Link } from 'react-router-dom'

import { Container, Form, Avatar } from './styles'

import { RxArrowLeft } from 'react-icons/rx'
import { FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

export function Profile() {
  return (
    <Container>
      <header>
        <Link to="/">
          <RxArrowLeft />
          Voltar
        </Link>
      </header>
      <Form>
        <Avatar>
          <img
            src="https://github.com/andresilveira1.png"
            alt="Foto do usuário"
          />

          <label htmlFor="avatar">
            <FiCamera />
            <input type="file" id="avatar" />
          </label>
        </Avatar>

        <Input type="text" placeholder="Nome" icon={FiUser} />
        <Input type="text" placeholder="E-mail" icon={FiMail} />
        <Input type="password" placeholder="Senha atual" icon={FiLock} />
        <Input type="password" placeholder="Nova Senha" icon={FiLock} />
        <Button title="Salvar" />
      </Form>
    </Container>
  )
}
