import { useState } from "react";
import "./FloatButton.css";

const FloatButton = (props) => {
  const [state, setState] = useState(true);
  const renderForm = () => {
    if (state) {
      props.onClicked("block");
      setState(false);
    } else {
      props.onClicked("none");
      setState(true);
    }
  };

  return (
    <button className="fab" onClick={renderForm} style={props.position}>
      <img src="/images/fab.svg" alt="abrir formulario" />
    </button>
  );
};

export default FloatButton;
