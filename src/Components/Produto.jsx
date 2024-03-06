import React, { useState } from "react";
import { useParams } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import Header from "./Header";
import { Helmet } from "react-helmet";

const ImgProduto = styled.img`
 width: 200px;
 height: 300px;
 border-radius: 6px;
`;

const Container = styled.div`
 display: flex;
 width: 50%;
 margin: 0 auto;
 gap: 1.5rem;
`;

const PrecoProduto = styled.p`
 font-family: Segoe UI, Tahoma, Geneva, Verdana, sans-serif;
 font-weight: 600;
 background: #7fff00;
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
   const response = await fetch(
    `https://ranekapi.origamid.dev/json/api/produto/${params.id}`
   );
   const json = await response.json();
   setProduto(json);
   setLoading(false);
  }
  puxaDados();
 }, [params]);

 return (
  <div>
   <Helmet>
    <title>{`Desafio | ${produto.nome} `}</title>
    <meta name="description" content="Produtos da Página" />
   </Helmet>
   <Header />
   {loading ? (
    <LoaderWrapper>
     <Loader />
    </LoaderWrapper>
   ) : (
    <Container>
     <div>
      <ImgProduto
       src={
        produto.fotos && produto.fotos.length > 0 ? produto.fotos[0].src : ""
       }
       alt={`Foto do ${produto.nome}`}
      />
     </div>
     <div>
      <h2
       style={{ fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif" }}
      >
       {produto.nome}
      </h2>
      <PrecoProduto>R$ {produto.preco}</PrecoProduto>
      <h3
       style={{
        fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
       }}
      >
       {produto.descricao}
      </h3>
     </div>
    </Container>
   )}
  </div>
 );
};

export default Produto;
