import Colaborador from "../Colaborador";
import "./Time.css";

const Time = (props) => {
  return props.colaboradores.length > 0 ? (
    <section className="time" style={{ backgroundColor: props.corSecundaria }}>
      <h3>{props.nome}</h3>
      <span
        className="underline"
        style={{ borderColor: props.corPrimaria }}
      ></span>
      <div className="cards">
        {props.colaboradores.map((colaboradores) => (
          <Colaborador
            key={colaboradores.nome}
            corPrimaria={props.corPrimaria}
            nome={colaboradores.nome}
            cargo={colaboradores.cargo}
            imagem={colaboradores.imagem}
          />
        ))}
      </div>
    </section>
  ) : (
    " "
  );
};

export default Time;
