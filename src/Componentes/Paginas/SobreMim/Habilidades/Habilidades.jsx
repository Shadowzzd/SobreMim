import styled from "styled-components";
import HTML5Branco from "../../../../Assets/HTML5Branco.png";
import CSS3Branco from "../../../../Assets/CSS3Branco.png";
import JavaScriptBranco from "../../../../Assets/JavaScriptBranco.png";
import ReactBranco from "../../../../Assets/ReactBranco.png";
import InglesBranco from "../../../../Assets/InglesBranco.png";

const SecaoHabilidadesEstilizada = styled.section`
  background-color: #222322;
  min-height: 100vh;
  font-family: Bona Nova;

  div {
    text-align: center;
    padding: 50px;

    h1 {
      color: white;
      font-size: 100px;
    }
    h4 {
      padding: 20px;
      color: white;
      font-size: 36px;
      opacity: 0.6;
      position: relative; /* Adicione position: relative; para que os pseudo-elementos usem esta referência */
    }

    h4::before,
    h4::after {
      content: "";
      position: absolute;
      top: 50%;
      width: 100px; /* Ajuste conforme necessário */
      height: 1px; /* Altura do risco */
      background-color: white; /* Cor do risco */
      opacity: 0.6;
    }

    h4::before {
      left: 500px;
    }

    h4::after {
      right: 500px;
    }
    @media only screen and (max-width: 480px) {
    h1{
      font-size: 24px;
    }
    h4{
      font-size: 16px;
    }
    img{
      width: 100%;
    }
    h5{
      font-size: 0.3em;
    }

    h4::before {
      left: 90%;
      width:50px;
    }

    h4::after {
      right: 90%;
      width: 50px;
    }
	}
    @media only screen and (min-width: 481px) and (max-width:1024px) {
      h1{
        font-size: 36px;
      }
      h4{
          font-size:24px;
      }
      h4::before {
      left: 20px;
    }

    h4::after {
      right: 20px;
    }
    
  }
    @media only screen and (min-width: 481px) and (max-width:1024px) {
      h4::before {
      left: -25px;
      width:50px;
    }

    h4::after {
      right: -25px;
      width:50px;
    }
	}
    @media only screen and (min-width: 1025px) and (max-width: 1280px) {
    
    h4::before {
      left: 100px;
    }

    h4::after {
      right: 100px;
    }
  }
  }
`;

const IconesEstilizados = styled.div`
  color: white;
  font-size: 48px;
  @keyframes flipLeftBounce {
    0% {
      opacity: 1;
      transform: rotateY(30deg);
    }
    50% {
      opacity: 1;
      transform: rotateY(-5deg);
    }
    80% {
      transform: rotateY(20deg);
    }
    100% {
      transform: rotateY(30deg);
    }
  }
  ul {
    display: flex;
    justify-content: space-between;
    
  }
  div {
    display: flex;
    justify-content: space-around;
  }
  img{
    animation: flipLeftBounce 2s infinite ;
  }
  

  @media only screen and (min-width: 600px) and (max-width: 1280px) {
    ul {
      align-items: center;
      text-align: center;
      justify-content: center;
      max-width: 100%;
      gap: 130px;
      padding: 10px;
    }

    div {
      align-items: center;
      text-align: center;
      justify-content: center;
      gap: 100px;
    }

    h5 {
      font-size: 24px;
    }

    h4 {
      font-size: 36px; 
    }
  }
  @media only screen and (max-width: 600px) {
    img{
      max-width: 55px;
    }
    ul{
      gap: 55px;}
    h5{
      font-size: 24px;
    }
    div{
      gap: 50px;
    }
	}

`;

const Habilidades = () => {
  return (
    <SecaoHabilidadesEstilizada>
      <div>
        <h1>HABILIDADES</h1>
        <h4>Tecnologias e conhecimentos</h4>
      </div>
      <IconesEstilizados>
        <ul>
          <li>
            <img src={HTML5Branco} alt="Icone HTML5" />
            <h5>HTML5</h5>
          </li>
          <li>
            <img src={CSS3Branco} alt="Icone CSS3" />
            <h5>CSS3</h5>
          </li>
          <li>
            <img src={JavaScriptBranco} alt="Icone JavaScript" />
            <h5>JavaScript</h5>
          </li>
        </ul>
        <div>
          <li>
            <img src={ReactBranco} alt="Icone React.JS" />
            <h5>React.JS</h5>
          </li>
          <li>
            <img src={InglesBranco} alt="Icone Inglês" />
            <h5>Inglês</h5>
          </li>
        </div>
      </IconesEstilizados>
    </SecaoHabilidadesEstilizada>
  );
};

export default Habilidades;
