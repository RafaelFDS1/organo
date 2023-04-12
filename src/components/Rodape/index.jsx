import "./Rodape.css";

const Rodape = () => {
  return (
    <footer>
      <ul>
        <li>
          <a href="/">
            <img src="/images/fb.png" alt="facebook" />
          </a>
        </li>
        <li>
          <a href="/">
            <img src="/images/tw.png" alt="twitter" />
          </a>
        </li>
        <li>
          <a href="/">
            <img src="/images/ig.png" alt="instagram" />
          </a>
        </li>
      </ul>
      <div className="logo">
        <a href="/">
          <img src="/images/logo.png" alt="organo" />
        </a>
      </div>
      <div>
        <p>Desenvolvido por Alura.</p>
      </div>
    </footer>
  );
};

export default Rodape;
