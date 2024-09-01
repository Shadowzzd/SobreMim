import styled from "styled-components"
import SetaParaBaixo from "../../../../Assets/SetaParaBaixo.png"



const SectionEstilizado = styled.section`
    display: block;
    width: 2000px;
    height: 300px;
    overflow-x: hidden;
    background-color: #fff;
    position: absolute;
    bottom: -285px;
    left: 10px;
    z-index: 1;
    -webkit-transform: rotate(-3.9deg);
    -moz-transform: rotate(-3.9deg);
    -ms-transform: rotate(-3.9deg);
    -o-transform: rotate(-3.9deg);
    transform: rotate(-3.9deg);
    margin-bottom: 150px;
    
    @media only screen and (max-width: 1919px) {
     display: none;
  }
 
`
const SecaoEstilizada = styled.section`
    z-index: 2;
    min-height: 500px;
    min-width: 100%;
    display: block;
    margin-top: 200px;
    text-align: center;
    font-size: 20px;
    line-height: 30px;
    background-color: white;
    font-family: Bona Nova;

    @keyframes rotateDownBounce {
  0% {
    transform: translateY(0) rotate(0);
  }
  25% {
    transform: translateY(10px) rotate(0);
  }
  50% {
    transform: translateY(0) rotate(0);
  }
  75% {
    transform: translateY(5px) rotate(0);
  }
  100% {
    transform: translateY(0) rotate(0);
  }
}
    h1{
        margin-top: 50px;
    }
    img{
        animation: rotateDownBounce 2s infinite
    }
    @media only screen and (min-width:481) and (max-width: 680px) {
    p{
      font-size: 2em;
    }
  }
    @media only screen and (min-width:320px) and (max-width: 480px) {
    p{
      font-size: 0.5em;
    }
    
  }
`

const Body=()=>{
    return(
        <>
        <SectionEstilizado/>
        
        
            <SecaoEstilizada>
                <h1> Me conheça melhor</h1>
                <img src={SetaParaBaixo} alt="Imagem de seta para baixo"/>
                <p>Me apresentei anteriormente mas acredito que ainda não me conheçam bem.</p>
                <p>Sou Guilherme Bartholo Batista, tenho 22 anos, moro atualmente no Brasil.</p>
                <p>Estudo e crio websites há cerca de 8 meses somente no Front-End, <br/>porém estou me desenvolvendo para me tornar um Desenvolvedor Full-Stack.</p>
                <p>Curso Desenvolvimento Web na faculdade Anhanguera e tenho Inglês fluente.</p>
                <p>Meu objetivo profissional é trabalhar como desenvolvedor no Canadá.</p>
            </SecaoEstilizada>
        </>
    )
}


export default Body