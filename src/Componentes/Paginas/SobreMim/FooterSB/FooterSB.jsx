import styled from "styled-components";
import Github from "../../../../Assets/IconeGithub.png";
import IconeDocumento from "../../../../Assets/IconeDocumento.png";
import Curriculo from "../../../../Assets/Currículo.docx"
import SetaParaBaixo from "../../../../Assets/SetaParaBaixo.png"

const FooterEstilizado = styled.div`
  font-family: Bona nova;
  background-color: white;
`;

const ContactIcons = styled.div`
  display: flex;
  justify-content: space-around;
  div {
    display: flex;
    gap: 30px;
    text-align: center;
    align-items: center;
  }
  button {
    border: none;
  }
  .Seta {
  animation: rotateSideBounce 2s infinite;
}

@keyframes rotateSideBounce {
  0% {
    transform: translateX(0) rotate(-90deg);
  }
  25% {
    transform: translateX(10px) rotate(-90deg);
  }
  50% {
    transform: translateX(0) rotate(-90deg);
  }
  75% {
    transform: translateX(5px) rotate(-90deg);
  }
  100% {
    transform: translateX(0) rotate(-90deg);
  }
}

  

  @media only screen and (min-width: 480px) and (max-width: 700px) {
  div {
    gap: 20px;
  }
  img {
    width: 80%;
  }
  h2 {
    font-size: 16px;
    line-height: 1;
  }
  .Seta{
    width: 10%;
  }
}
@media only screen and (max-width: 480px) {
  h2 {
    font-size: 16px;
    line-height: 1;
  }
  img{
    width:80%;

  }
  .Seta{
    width: 10%;
  }
  div{
    margin-bottom: 40px;
  }
}
`;

const ContactMe = styled.div`
  align-items: center;
  text-align: center;
  justify-content: center;
  padding: 20px;
  h1 {
    font-size: 36px;
    padding: 20px;
  }
  
  button {
    min-width: 20%;
    color: white;
    border-radius: 50px;
    padding: 20px;
    font-size: 28px;
    background-color: #222322;
    border: solid;
    cursor: pointer;
  }
  button:active{
    opacity: 0.8;
  }
  @media only screen and (max-width: 700px) {
    h1 {
    font-size: 24px;
    padding: 20px;
  }
    button{
      font-size: 16px;
   }
	}

`;



const FooterSB = () => {
  const githubUrl = "https://github.com/Shadowzzd";
  
  const sendEmail = () => {
    window.open("mailto:guilhermebartholob@gmail.com?subject=Proposta de emprego &body=Seja muito bem-vindo");
  }
  
  return (
    <FooterEstilizado>
      <ContactMe>
        <h1>Gostou do meu portfólio?</h1>
        <button type="button" onClick={sendEmail}>Entre em contato!</button>
      </ContactMe>
      <ContactIcons>
      <div>
        <a href={githubUrl} target="_blank" rel="noopener noreferrer">
          <img className="IconeGithub" src={Github} alt="Logo do Github" />
        </a>
      
          <h2>Clique para baixar meu currículo</h2>
          <img src={SetaParaBaixo} className="Seta" alt="Seta para o lado"/>
          <a href={Curriculo} download="Curriculo" target="blank">
            <img src={IconeDocumento} alt="Ícone de Documento"/>
          </a>
          
        </div>
      </ContactIcons>
    </FooterEstilizado>
  );
};

export default FooterSB;
