import { Link } from 'react-router-dom'
import './style.module.css'

export function Header() {
  return (
    <header>
        <h1>Gerenciamento de Tarefas</h1>
        <nav>
        <Link to="/cadastro-usuarios">Cadastro de Usuários</Link>
        <Link to="/cadastro-tarefas">Cadastro de Tarefas</Link>
        <Link to="/gerenciar-tarefas">Gerenciar Tarefas</Link>
        </nav>
    </header>
  )
}
