import styled, { keyframes } from "styled-components";
import PerfilDoGithub from "../../../../Assets/PerfilDoGithub.png";
import Losango from "../../../../Assets/Losango.svg";

const downUpAnimation = keyframes`
  0% {
    top: 0;
  }
  50% {
    top: -60px;
  }
  100% {
    top: 0px;
  }

  
`;

const ImagemEstilizada = styled.div`
  min-width: 100%;
  min-height: 100%;
  background-image: url("https://www.wallaceerick.com.br/content/images/cloud.jpg");
  z-index: -1;
  background-size: cover;
  background-repeat: no-repeat;
  position: fixed;
  animation: ${downUpAnimation} 5s linear infinite;
  ::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
  }
  @media only screen and (min-width: 1025px) and (max-width: 1800px) {
    animation:none;
    top: 0px;
	}
  
`;

const HeaderEstilizado = styled.header`
  min-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-family: "Agbalumo";
  height: 60%;
  position: relative;
  @keyframes flipLeft {
    0% {
      opacity: 0;
      transform: translateX(-100px);
    }
    70% {
      opacity: 1;
      transform: translateX(0);
    }
  }
  h1 {
    font-size: 170px;
    opacity: 0.2;
    z-index: 3;
    color: white;
    animation: flipLeft 1s ease-out 1;
  }

  .mim {
    margin-left: 400px;
    z-index: 3;
    margin-top: 40px;
    color: white;
  }

  .Losango {
    width: 15%;
    height: auto;
    overflow: hidden;
    background-color: transparent;
    z-index: 1;
    position: absolute;
    padding: 20px;
    animation: flipLeft 1s ease-out 1;
  }

  .PerfilDoGithub {
    width: 27%;
    height: 10%;
    object-fit: cover;
    clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
    z-index: 2;
    position: relative;
    animation: flipLeft 1s ease-out 1;
  }

  .Imagens {
    max-width: 60%;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    margin: 0 0 110px 110px;
  }

  .Header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  @media only screen and (min-width: 1025px) and (max-width: 1280px) {
    
    }
    h1{
      font-size: 120px;
    }
	;
  @media only screen and (max-width: 600px) {
    
     h1{
        font-size: 48px;
        padding:0px;
        margin-top: 55px;
        z-index: 0;
        position: absolute;
     }
     .mim{
      position:absolute ;
      margin:135px 0 0px 100px;
      z-index: 3;
     }
     .PerfilDoGithub{
      width: 60%;
      margin:20px 90px 80px 0;
     }
     .Losango{
      margin-right: 50px;
    }
    }
    
  
  @media only screen and (min-width: 1025px) {
    .PerfilDoGithub{
      
    }
    }
`;

const Header = () => {
  return (
    <HeaderEstilizado>
      <ImagemEstilizada />
      <div className="Header">
        <div className="Imagens">
          <img className="Losango" src={Losango} alt="Losango" />
          <img
            className="PerfilDoGithub"
            src={PerfilDoGithub}
            alt="Perfil do Github"
          />
        </div>
        <h1>Sobre </h1>
        <h1 className="mim">mim</h1>
      </div>
    </HeaderEstilizado>
  );
};

export default Header;
