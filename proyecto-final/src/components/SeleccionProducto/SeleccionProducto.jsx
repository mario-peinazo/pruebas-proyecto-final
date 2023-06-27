import fotosModelos from "../../assets/imagenes/modelos/fotosModelos";
import imgBotones from "../../assets/imagenes/botones/imgBotones";
import { useEffect, useState } from "react";
import {
  BotonColor,
  ImgModelos,
  FondoComprar,
  EspacioCompra,
  CajaColores,
  InputNum,
  BtnComprar,
} from "./SeleccionProducto.styles";
import logoGrandeHibride from "../../assets/imagenes/LogoGrandeHibride.png";
import comprarCarro from "../../assets/imagenes/comprarCarro.png";
import { useDispatch } from "react-redux";
import { addProduct } from "../../features/carrito/carritoSlice";


const SeleccionProducto = () => {

  const [fotoModel, setFotoModel] = useState(fotosModelos[4].img);
  const [cantidad, setCantidad] = useState(1);

  const [prodAct, setProdAct] = useState({
    color: "Grosella",
    cantidad: 1,
  });

  const dispatch = useDispatch();

  const modificarColor = (color) => {
    const foto = fotosModelos.find((d) => d.color == color);
    setFotoModel(foto.img);
    setProdAct({
      color: color,
      cantidad: Number(cantidad),
    });
  };

  const añadirCarro = () => {
    const nuevoProducto = {
      color: prodAct.color,
      cantidad: Number(cantidad),
    };
    dispatch(addProduct(nuevoProducto));
    console.log(nuevoProducto)
  };

  useEffect(() => {
    setProdAct({
      ...prodAct,
      cantidad: Number(cantidad),
    });
  }, [cantidad]);


  return (
    <FondoComprar>
      <ImgModelos foto={fotoModel}>
        <img src={logoGrandeHibride} alt="logo Híbride" />
      </ImgModelos>

      <EspacioCompra>
        <div>
          <h1>BINDER</h1>
          <p>58€</p>
        </div>

        <CajaColores>
          {imgBotones.map((d) => {
            return (
              <>
                <BotonColor onClick={() => modificarColor(d.color)}>
                  <img src={d.img} alt="botones seleccion color binder" />
                </BotonColor>
              </>
            );
          })}
        </CajaColores>

        <div>
          <InputNum
            type="number"
            name=""
            id=""
            min="1"
            max="100"
            value={cantidad}
            onChange={(e) => setCantidad(e.target.value)}
          />
          <BtnComprar onClick={() => añadirCarro()}>
            <img src={comprarCarro} alt="Botón añadir al carrito" />
          </BtnComprar>
        </div>
      </EspacioCompra>
    </FondoComprar>
  );
};

export default SeleccionProducto;
