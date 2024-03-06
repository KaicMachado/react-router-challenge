import React, { useState } from "react";
import styled from "styled-components";
import Header from "./Header";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { animeLeft } from "./Animacao";

const Container = styled.div`
 display: flex;
 flex-wrap: wrap;
 gap: 2rem;
 max-width: 800px;
 justify-content: center;
 margin: 0 auto;
`;

const Card = styled.li`
 display: flex;
 flex-direction: column;
 text-align: left;
 font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
 font-weight: bold;
`;

const CardImg = styled.img`
 width: 200px;
 height: 300px;
 border-radius: 6px;
`;

const Conteudo = styled.div`
 animation: ${animeLeft} 0.3s forwards;
`;

const Produtos = () => {
 const [dados, setDados] = useState("");
 React.useEffect(() => {
  fetch("https://ranekapi.origamid.dev/json/api/produto")
   .then((response) => response.json())
   .then((json) => setDados(json));
 }, []);

 if (dados === null) return null;
 return (
  <Conteudo>
   <Helmet>
    <title>Desafio | Produtos</title>
    <meta name="description" content="Produtos da Página" />
   </Helmet>
   <Header />
   <Container>
    {dados &&
     dados.map((produto) => (
      <Link
       to={produto.id}
       key={produto.id}
       style={{ textDecoration: "none", color: "#000" }}
      >
       <Card>
        <CardImg src={produto.fotos[0].src} alt="" />
        {produto.nome}
       </Card>
      </Link>
     ))}
   </Container>
  </Conteudo>
 );
};

export default Produtos;
