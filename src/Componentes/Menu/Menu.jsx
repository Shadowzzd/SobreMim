import { NavLink } from "react-router-dom"
import styled from "styled-components"

const MenuEstilizado = styled.div`
  height: 112px;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 3rem;
  font-size: 1.25rem;
  line-height: 1.5rem;
  color: var(--cor-fonte-principal);
  
  a {
    padding: 15px;
    text-decoration: none;
    color: inherit;
  }

  .linkDestacado {
    text-decoration: underline;
    color: white;
  }

  
  @media (max-width: 744px) {
    height: 72px;
  }
  .coresDoMenu{
    color: white;
  }
`;

const Menu = () => {
  

  return (
    <MenuEstilizado>
      <header>
        <nav>
        <NavLink to="/" className={(navData) => (navData.isActive ? "linkDestacado" : 'coresDoMenu')}>Início</NavLink>
          
        <NavLink to="/SobreMim" className={(navData) => (navData.isActive ? "linkDestacado"  : 'none')}>Sobre Mim</NavLink>
        </nav>
      </header>
    </MenuEstilizado>
  );
};

export default Menu;
