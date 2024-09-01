import styled from "styled-components";
import HTML5Image from "../../Assets/HTML5.png"; // Use caminho relativo para voltar duas pastas até a pasta "src" e, em seguida, acessar "Assets"
import CSS3Image from "../../Assets/CSS3.png";
import JavaScriptImage from "../../Assets/JavaScript.png";
import ReactImage from "../../Assets/React.png";
import CardImagem from "../../Assets/CardImagem.jpg";
import BarthBank from "../../Assets/Barth-Bank.png";
import NumeroSecreto from "../../Assets/Numero-Secreto.png";

const link1 = 'https://numero-secreto-brown-eight.vercel.app/';
const link2 = 'https://barth-bank-alura.vercel.app/index.html';


const TituloEstilizado = styled.div`
  h1 {
    padding: 20px;
    margin-left: 110px;
    color: white;
  }
  @media only screen and (max-width: 600px) {
    h1 {
      text-align: center;
      font-size: 24px;
      padding: 0;
      margin: 0;
    }
  }

  /* Media query para dispositivos com largura de tela entre 601 e 1024 pixels (tablets) */

  @media only screen and (min-width: 601px) and (max-width: 1024px) {
    font-size: 24px;

    /* Adicione estilos específicos para tablets aqui */
  }
`;
const SectionEstilizada = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 20px;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
    max-width: 100vw;
    justify-content: center;
    align-items: center;

    gap: 30px;
    h2 {
      padding: 0;
      margin: 0;
      font-size: 5px;
    }
    p {
      padding: 0;
      margin: 0;
      font-weight: 500;
    }

    /* Adicione estilos específicos para celulares aqui */
  }

  /* Media query para dispositivos com largura de tela entre 601 e 1024 pixels (tablets) */

  @media only screen and (min-width: 601px) and (max-width: 1024px) {
    gap: 10px;
  padding: 30px;
  }
`;

const CardContainer = styled.div`
  cursor: pointer;
  display: flex;
  
  justify-content: center;
  background-color: #252B48;
  border-radius: 30px;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5);
  margin: 10px 0 0 20px;
  transition: background-color 0.3s ease, opacity 0.3s ease; /* Adiciona transição para a cor de fundo e opacidade */

  &:hover {
    background-color: #f0f0f0;
    opacity: 0.8; /* Diminui a opacidade quando o mouse passa por cima */
  }
  a img {
    max-width: 100%;
    background-repeat: no-repeat;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    transition: transform 0.3s ease; /* Adiciona uma transição na transformação das imagens */

    @media only screen and (min-width: 0px) and (max-width: 1980px) {
      min-height: 90%;
  }
  }
  
  img:hover {
    transform: scale(1.1) translateY(-5px); /* Aumenta a escala e move a imagem para cima */
  }

  h2 {
    font-size: 1em;
    padding: 5px;
    margin: 0 20px 20px 0;
  }
  p {
    font-size: 16px;
    padding: 10px;
    margin: 0 20px 10px 0;
  }
  @media only screen and (max-width: 600px) {
    margin: 0px;
    padding: 0px;
    max-height:60%;
    min-width: 70%;
    display: flex;
    
    
    h2 {
      text-align:center;
      z-index: 15;
      position: relative;
      font-size: 0.6em;
      padding: 1;
      margin: 0 0 10px 0;
      max-width: 100%;
      max-height: 40%;
      text-align: center;
      overflow: visible;
      white-space: nowrap;
    }
    p {
      text-align: center;
      font-size: 8px;
      padding: 0;
      margin: 0;
    }
  }

  /* Media query para dispositivos com largura de tela entre 601 e 1024 pixels (tablets) */

  @media only screen and (min-width: 601px) and (max-width: 1024px) {
    min-width: 40%;
    
    
    h2{
      padding:0 10px 10px 0;
      font-size: 0.8em;
      margin: 0;
      max-height: 30%;
      
    }
    p{
      font-size: 0.8em;
      padding: 10px 5px 5px 15px;
      margin-bottom: 0;

    }
  }
`;

const CardEstilizado = styled.div`
  text-align: right;
  background-color: #dceeff;
  border-radius: 30px;
  

  @media only screen and (min-width: 601px) and (max-width: 1700px) {
    h2{
    line-height: 1em;
    text-align: left;}

    padding:10px;
  }
`;

const IconesContainer = styled.div`
  img {
    max-width: 20%;
    margin-right: 5px;
    
  }
  img:hover {
    background-color: #fff;
    opacity: 1;
    filter: brightness(1.4);
  }
  @media only screen and (max-width: 600px) {
    max-width: 100%;
    margin-bottom: 20px;
    /* estilos específicos para celulares aqui */
  }

  /* Media query para dispositivos com largura de tela entre 601 e 1024 pixels (tablets) */

  @media only screen and (min-width: 601px) and (max-width: 1024px) {
    padding-top: 10px;
    margin-bottom: 10px;

  }
`;

const Card = () => {
  return (
    <>
      <TituloEstilizado>
        <h1>Projetos de portfólio</h1>
      </TituloEstilizado>
      <SectionEstilizada>
        <CardContainer style={{backgroundColor:"white"}}>
        <a href={link2} target="_blank" rel="noopener noreferrer">
          <img src={BarthBank} alt="ImagemDoCard" />
        </a>
          <CardEstilizado>
            <h2>Projeto de Banco Próprio</h2>
            <p>Barth-Bank</p>
            <IconesContainer>
              <img src={HTML5Image} alt="HTML5 Logo" />
              <img src={CSS3Image} alt="CSS3 Logo" />
              <img src={JavaScriptImage} alt="JavaScript Logo" />
              {/* <img src={ReactImage} alt="React Logo" /> */}
            </IconesContainer>
          </CardEstilizado>
        </CardContainer>

        <CardContainer>
          <a href={link1} target="_blank" rel="noopener noreferrer">
          <img className="Numero"   src={NumeroSecreto} alt="ImagemDoCard" />
          </a>
          <CardEstilizado>
            <h2>Projeto de Reconhecimento de voz</h2>
            <p>Um jogo de intuição</p>
            <IconesContainer>
              <img src={HTML5Image} alt="HTML5 Logo" />
              <img src={CSS3Image} alt="CSS3 Logo" />
              <img src={JavaScriptImage} alt="JavaScript Logo" />
              {/* <img src={ReactImage} alt="React Logo" /> */}
            </IconesContainer>
          </CardEstilizado>
        </CardContainer>
      </SectionEstilizada>
    </>
  );
};

export default Card;
