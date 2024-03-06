import React, { useState } from "react";
import { useParams } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import Header from "./Header";
import { Helmet } from "react-helmet";
import { animeLeft } from "./Animacao";

const ImgProduto = styled.img`
 width: 200px;
 height: 300px;
 border-radius: 6px;
`;

const Container = styled.div`
 display: flex;
 flex-direction: column;
 width: 50%;
 margin: 0 auto;
 gap: 1.5rem;
 animation: ${animeLeft} 0.3s forwards;
`;

const PrecoProduto = styled.p`
 font-family: Segoe UI, Tahoma, Geneva, Verdana, sans-serif;
 font-weight: 600;
 background: #91fb5d;
 color: #017e01;
 width: max-content;
 border-radius: 8px;
 padding: 6px 8px;
`;

// Loader
const spinAnimation = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const Loader = styled.div`
 border: 4px solid #f3f3f3;
 border-top: 4px solid #3498db;
 border-radius: 50%;
 width: 50px;
 height: 50px;
 animation: ${spinAnimation} 1s linear infinite;
`;

const LoaderWrapper = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
 height: 100vh;
`;

const Produto = () => {
 const params = useParams();

 const [produto, setProduto] = useState({});
 const [loading, setLoading] = useState(true);

 React.useEffect(() => {
  async function puxaDados() {
   try {
    const response = await fetch(
     `https://ranekapi.origamid.dev/json/api/produto/${params.id}`
    );
    const json = await response.json();
    setProduto(json);
   } finally {
    setLoading(false);
   }
  }
  puxaDados();
 }, [params]);

 if (produto === null) return null;
 return (
  <div>
   <Helmet>
    <title>{`Desafio | ${produto.nome} `}</title>
    <meta name="description" content="Produtos da Página" />
   </Helmet>
   {loading ? (
    <LoaderWrapper>
     <Loader />
    </LoaderWrapper>
   ) : (
    <Container>
     <div style={{ display: "flex", gap: "1rem" }}>
      {produto.fotos.map((foto) => (
       <ImgProduto key={foto.src} src={foto.src} alt={foto.titulo}></ImgProduto>
      ))}
     </div>
     <div
      style={{ fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif" }}
     >
      <h2>{produto.nome}</h2>
      <PrecoProduto>R$ {produto.preco}</PrecoProduto>
      <h3>{produto.descricao}</h3>
     </div>
    </Container>
   )}
  </div>
 );
};

export default Produto;
