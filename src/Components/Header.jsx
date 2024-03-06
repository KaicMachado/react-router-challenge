import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Button = styled.button`
 padding: 0.5rem 1rem;
 font-size: 1.25rem;
 font-weight: 600;
 font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
 border: none;
 border-radius: 4px;
 margin-bottom: 2rem;
 &:hover {
  transform: scale(1.1);
  transition: 0.3s;
  cursor: pointer;
  background: #e3e3e3;
 }
`;

const NavBar = styled.nav`
 display: flex;
 gap: 1rem;
 justify-content: center;
 margin-top: 2rem;
`;

const Header = () => {
 return (
  <NavBar>
   {" "}
   <NavLink to="/" end style={{ textDecoration: "none", color: "#000" }}>
    <Button>Produtos</Button>
   </NavLink>{" "}
   <NavLink to="contato" style={{ textDecoration: "none", color: "#000" }}>
    <Button>Contato</Button>
   </NavLink>
  </NavBar>
 );
};

export default Header;
