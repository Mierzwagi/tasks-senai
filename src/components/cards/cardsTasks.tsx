import style from "./card.module.css";

export function CardsTasks() {
  return (
    <div className={style.containerCard}>
      <strong>
        Decrição: <p>Descrição das tarefas</p>
      </strong>
      <strong>
        Setor: <p>Descrição das tarefas</p>
      </strong>
      <strong>
        Prioridade: <p>Descrição das tarefas</p>
      </strong>
      <strong>
        Vinculado a: <p>Descrição das tarefas</p>
      </strong>
      <div>
        <button>Editar</button>
        <button>Excluir</button>
      </div>
      <div className={style.containerRadio}>
        <input type="radio" id="" name="" value="A Fazer"></input>
        <label>A Fazer</label>
        <input type="radio" id="" name="" value="Fazendo"></input>
        <label>Fazendo</label>
        <input type="radio" id="sexo-f" name="" value="Pronto"></input>
        <label>Fazendo</label>
      </div>
    </div>
  );
}
