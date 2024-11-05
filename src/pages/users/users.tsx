import { Header } from "../../components/header/header";
import style from "./users.module.css";

export function Users() {
  return (
    <>
      <section className={style.containerUsers}>
        <form action="">
          <h2>Cadastro de Usuário</h2>
          <strong>Nome:</strong>
          <input type="text" />
          <strong>Email:</strong>
          <input type="text" />
          <button>Cadastrar</button>
        </form>
      </section>
    </>
  );
}
