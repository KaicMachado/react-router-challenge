import { BrowserRouter, Route, Routes } from "react-router-dom";
import Produtos from "./Components/Produtos";
import Contato from "./Components/Contato";
import Produto from "./Components/Produto";
import Footer from "./Components/Footer";

function App() {
 return (
  <div>
   <BrowserRouter>
    <Routes>
     <Route path="/" element={<Produtos />} />
     <Route path="produto/:id/*" element={<Produto />} />
     <Route path="contato" element={<Contato />} />
    </Routes>
   </BrowserRouter>
   <Footer />
  </div>
 );
}

export default App;
