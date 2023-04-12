import { useState } from "react";
import Banner from "./components/Banner";
import FloatButton from "./components/FloatButton";
import Formulario from "./components/Formulario";
import Rodape from "./components/Rodape";
import Time from "./components/Time";

const App = () => {
  const times = [
    {
      nome: "Programação",
      corPrimaria: "#57C278",
      corSecundaria: "#D9F7E9",
    },
    {
      nome: "Front-End",
      corPrimaria: "#82CFFA",
      corSecundaria: "#E8F8FF",
    },
    {
      nome: "Data Science",
      corPrimaria: "#A6D157",
      corSecundaria: "#F0F8E2",
    },
    {
      nome: "Devops",
      corPrimaria: "#E06B69",
      corSecundaria: "#FDE7E8",
    },
    {
      nome: "UX e Design",
      corPrimaria: "#DB6EBF",
      corSecundaria: "#FAE9F5",
    },
    {
      nome: "Mobile",
      corPrimaria: "#FFBA05",
      corSecundaria: "#FFF5D9",
    },
    {
      nome: "Inovação e Gestão",
      corPrimaria: "#FF8A29",
      corSecundaria: "#FFEEDF",
    },
  ];
  const [colaboradores, setColaborador] = useState([]);

  const [display, setDisplay] = useState("");
  const aoNovoColab = (valor) => {
    setColaborador([...colaboradores, valor]);
  };

  return (
    <div className="App">
      <Banner />
      <Formulario
        display={display}
        times={times.map((time) => time.nome)}
        aoColaboradorCadastrado={(valor) => aoNovoColab(valor)}
      />
      <FloatButton onClicked={(valor) => setDisplay(valor)} />
      <h1>Minha Organização:</h1>
      <span className="underlined"></span>
      {times.map((time) => (
        <Time
          key={time.nome}
          nome={time.nome}
          colaboradores={colaboradores.filter(
            (elem) => elem.time === time.nome
          )}
          corPrimaria={time.corPrimaria}
          corSecundaria={time.corSecundaria}
        />
      ))}
      <Rodape />
    </div>
  );
};
export default App;
