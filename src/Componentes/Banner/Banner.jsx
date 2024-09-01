import styled from "styled-components";
import BannerImage from "../../Assets/imagem.svg";
import FotoDoGithub from "../../Assets/PerfilDoGithub.png";
import Github from "../../Assets/IconeGithub.png";

const BannerEstilizado = styled.div`
  display: flex;
  position: relative;
  background-image: url(${BannerImage});
  padding: 1rem 7.5rem 6.25rem;
  background-repeat: no-repeat;
  background-size: cover;
  color: #fff;
  z-index: 1;
  max-height: 80%;

  .FotoDoGithub {
    padding: 10px;
    margin: 0 20px 20px 0;
    max-width: 10%;
    border-radius: 70px;
    position: absolute;
    bottom: 0;
    right: 0;
    transition: transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94),
      opacity 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    z-index: 2; /* Add this line to place it in front of the banner */
  }

  .FotoDoGithub:hover {
    transform: translateY(-50px);
    opacity: 1;
  }

  p {
    font-family: "Open Sans";
    font-size: 1.5rem;
    line-height: 2rem;
    max-width: 40%;
  }
  .IconeGithub {
    z-index: 2; /* Add this line to place all images in front of the banner */
    background-color: #fff;
    border-radius: 50px;
    max-width: 50px;
    margin-top: 30px;
    transition: transform 0.3s ease-in-out; /* Add a transition for a smooth effect */
  }
  .IconeGithub:hover {
    transform: scale(1.2);
  }
  @media only screen and (max-width: 600px) {
    display: flex;
    background-size: 100% 100%;
    min-width: 100%;
    padding: 10px;
    .FotoDoGithub{
      max-width: 2.5em;
      padding: 0;
    }
    .IconeGithub{
      max-width: 2em;
      margin: 0 0 20px 0;
      
    }
    .FotoDoGithub:hover {
    transform: translateY(-30px);
    opacity: 1;
  }
  
    h1 {
      font-size: 14px;
      max-height:30%;
    }
    p {
      font-size: 10px;
      max-width: 100%;
    }

    /* Adicione estilos específicos para celulares aqui */
  }

  /* Media query para dispositivos com largura de tela entre 601 e 1024 pixels (tablets) */

  @media only screen and (min-width: 601px) and (max-width: 1024px) {
    p{
      min-width: 60%;
    }
    .FotoDoGithub{
      min-width: 10%;
    }

    body {
      font-size: 18px;
    }

    /* Adicione estilos específicos para tablets aqui */
  }

  /* Media query para dispositivos com largura de tela maior que 1024 pixels (telas de notebook) */

  @media only screen and (min-width: 1025px) {
    
    body {
      font-size: 20px;
      
    }
  }
`;

const Banner = () => {
  const githubUrl = "https://github.com/Shadowzzd";
  return (
    <BannerEstilizado>
      <div>
        <h1>Olá</h1>
        <p>
          Eu me chamo Guilherme Bartholo Batista, React Front-End Developer.
          Estudo e trabalho com Front-End há 8 meses.
        </p>
        <a href={githubUrl} target="_blank" rel="noopener noreferrer">
          <img className="IconeGithub" src={Github} alt="Logo do Github" />
        </a>
      </div>
      <div>
        <img
          className="FotoDoGithub"
          src={FotoDoGithub}
          alt="Foto de Perfil do Github"
        />
      </div>
    </BannerEstilizado>
  );
};

export default Banner;
