import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Menu from "./components/Menu/Menu";
import {PagProducto, PagCarrito, PagEspacioPersonal, PagFinalizarCompra, PagSesion} from "./assets/paginas/indexPags";

function App() {

  return (
    <>
      <Router>
        <Menu />

        <Routes>
          <Route path="/carrito" element={<PagCarrito/>} />
          <Route path="/" element={<PagProducto />} />
          <Route path="/carrito" element={<PagCarrito />} />
          <Route path="/finalizar-compra" element={<PagFinalizarCompra />} />
          <Route path="/registro-inicio" element={<PagSesion />} />
          <Route path="/espacio-personal" element={<PagEspacioPersonal />} />

          <Route path="*" element={<div>404</div>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
