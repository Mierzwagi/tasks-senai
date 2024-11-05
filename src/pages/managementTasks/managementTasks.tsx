import { CardsTasks } from "../../components/cards/cardsTasks";
import style from "./style.module.css";

export function ManagementTasks() {
  return (
    <>
      <section className={style.containerTasks}>
        <h2>Tarefas</h2>
        <div className={style.containerAticles}>
          <article>
            <h3>A Fazer</h3>
            <CardsTasks />
          </article>
          <article>
            <h3>Fazendo</h3>
            <CardsTasks />
          </article>
          <article>
            <h3>Pronto</h3>
            <CardsTasks />
          </article>
        </div>
      </section>
    </>
  );
}
