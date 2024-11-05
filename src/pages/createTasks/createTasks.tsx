import { Header } from "../../components/header/header";
import style from "./style.module.css";

export function TasksCreate() {
  return (
    <>
      <section className={style.containerTasks}>
        <form action="">
          <h2>Cadastro de Tarefas</h2>
          <strong>Descrição:</strong>
          <input type="text" />
          <strong>Setor:</strong>
          <input type="text" />
          <strong>Usuário:</strong>
          <select name="" id="">
            <option value="">1</option>
            <option value="">2</option>
            <option value="">3</option>
          </select>
          <strong>Prioridade:</strong>
          <select name="" id="">
            <option value="">1</option>
            <option value="">2</option>
            <option value="">3</option>
          </select>
          <button>Cadastrar</button>
        </form>
      </section>
    </>
  );
}
