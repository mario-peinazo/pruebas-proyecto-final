import { useSelector } from "react-redux";
import {FondoCarrito} from "./Carrito.style"

const Carrito = () => {
    const carritoState = useSelector((state) => state.carrito);

    return (
      <FondoCarrito> 
        {carritoState.map((d) => {
          console.log(carritoState)
          return (
            <>
              <p>
                {d.color} - {d.cantidad}
              </p>
            </>
          );
        })}
      </FondoCarrito>
    );
}

export default Carrito