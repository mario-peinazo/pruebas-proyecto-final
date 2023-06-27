import { FondoMenu, ImgLogo, BotonMenu, CajaBotones } from "./Menu.styles";
import logoGrandeHibride from "../../assets/imagenes/logoGrandeHibride.png";
import carrito from "../../assets/imagenes/carrito.png";
import usuarie from "../../assets/imagenes/usuario.png";
import { useNavigate, Link } from "react-router-dom";

const Menu = () => {
  const navigate = useNavigate();

  const pulsadoCart = () => {
    navigate("/carrito");
  };
  const pulsadoUsu = () => {
    navigate("/espacio-personal");
  };

  return (
    <FondoMenu>
      <Link to="/">
        <ImgLogo src={logoGrandeHibride} alt="logo HíBRIDE" />
      </Link>
      <CajaBotones>
        <BotonMenu onClick={pulsadoCart}>
          <img src={carrito} alt="botón carrito" />
        </BotonMenu>
        <BotonMenu onClick={pulsadoUsu}>
          <img src={usuarie} alt="botón espacio personal" />
        </BotonMenu>
      </CajaBotones>
    </FondoMenu>
  );
};

export default Menu;
