import { BrowserRouter, Route, Routes } from "react-router-dom";
import Produtos from "./Components/Produtos";
import Contato from "./Components/Contato";
import Produto from "./Components/Produto";
import Footer from "./Components/Footer";
import styled from "styled-components";
import Header from "./Components/Header";

const ContentApp = styled.div`
 display: flex;
 flex-direction: column;
 max-width: 45rem;
 margin: 0 auto;
 min-height: calc(100vh + 5rem);
`;

function App() {
 return (
  <ContentApp>
   <BrowserRouter>
    <Header />
    <Routes>
     <Route path="/" element={<Produtos />} />
     <Route path="produto/:id" element={<Produto />} />
     <Route path="contato" element={<Contato />} />
    </Routes>
    <Footer />
   </BrowserRouter>
  </ContentApp>
 );
}

export default App;
