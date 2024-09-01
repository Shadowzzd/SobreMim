import styled from "styled-components";
import Email from "../../Assets/E-mail.png";
import { useState, useRef } from "react";

const FooterEstilizado = styled.section`
    display: flex;
    text-align: right;
    justify-content: end;
    h2{
        color: white;
        font-size: 1.5em;
    }
    @media only screen and (max-width: 600px) {
      padding-left: 20px;
      h2{
        font-size: 1em;
        min-width: 100%;
      }
    }
    @media only screen and (min-width: 1025px) {
      h2{
        font-size: 1.5em;
      }
    }
    
`;

const DivFooter = styled.div`
    margin: 100px;
`;

const EmailLabel = styled.label`
  display: flex;
  align-items: center;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  min-width: 400px;
  min-height: 40px;
  background-color: #99a0c436;
  padding-left: 10px; /* Espaço para a imagem */
  position: relative; /* Para permitir posicionamento absoluto */

  @media only screen and (max-width: 600px) {
    min-width: 10px;
    position: absolute;
    right: 10px;
     /* Ajuste a posição conforme necessário */
  }
`;



const EmailButton = styled.button`
    border: none;
    outline: none;
    flex: 1;
    min-height: 40px;
    background: transparent;
    cursor: pointer;
    :hover{
    opacity: 0.6;
    transition: opacity 0.3s;
    }
    :active{
        background-color: #3776d4;
        transition: 0.1;
        border-radius: 20px;
    }
    
`;

const EmailImage = styled.img`
    width: 20px;
    height: 20px;
    margin-right: 10px; /* Espaço entre a imagem e o texto */
    
`;






const Footer = () => {
    const [copySuccess, setCopySuccess] = useState('Guilhermebartholob@gmail.com');
    const emailRef = useRef(null);

    const handleEmail = () => {
      const email = emailRef.current.value;
      navigator.clipboard.writeText(email);
      setCopySuccess('E-mail copiado');
  
      // Define um timer para limpar a mensagem "E-mail copiado" após alguns segundos
      setTimeout(() => {
        setCopySuccess('Guilhermebartholob@gmail.com');
      }, 5000);
    };
    
  
    return (
      <FooterEstilizado>
        <DivFooter>
          <h2>Entre em contato</h2>
          <EmailLabel>
            <EmailImage src={Email} alt="Ícone de e-mail" />
            <EmailButton onClick={handleEmail} ref={emailRef} value="Guilhermebartholob@gmail.com">
              {copySuccess}
            </EmailButton>
          </EmailLabel>
        </DivFooter>
      </FooterEstilizado>
    );
  };
  
  export default Footer;