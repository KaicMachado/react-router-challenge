import React from "react";
import Header from "./Header";
import FotoContato from "../assets/contato.jpg";
import styled, { keyframes } from "styled-components";
import { Helmet } from "react-helmet";
import { animeLeft } from "./Animacao";

const Lista = styled.ul`
 font-family: Segoe UI, Tahoma, Geneva, Verdana, sans-serif;
 list-style: none;
 display: flex;
 flex-direction: column;
 gap: 0.75rem;
 font-weight: bold;
`;

const ListaItem = styled.li`
 &::before {
  content: "";
  position: relative;
  width: 18px;
  height: 2px;
  display: block;
  top: 15px;
  left: -25px;
  background: #e3e3e3;
 }
`;

const Conteudo = styled.div`
 animation: ${animeLeft} 0.3s forwards;
`;

const Contato = () => {
 return (
  <Conteudo>
   <Helmet>
    <title>Desafio | Contato </title>
    <meta name="description" content="Produtos da Página" />
   </Helmet>
   <Header />
   <div style={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
    <img
     style={{ height: "450px", width: "300px", borderRadius: "8px" }}
     src={FotoContato}
     alt="Foto de contato"
    />
    <div>
     <h2
      style={{
       fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
       marginLeft: "1rem",
      }}
     >
      Entre em Contato.
     </h2>
     <Lista>
      <ListaItem>kaicmachado2@gmail.com</ListaItem>
      <ListaItem>(16) 99296-7026</ListaItem>
      <ListaItem>Rua Ali Perto, 342</ListaItem>
     </Lista>
    </div>
   </div>
  </Conteudo>
 );
};

export default Contato;
