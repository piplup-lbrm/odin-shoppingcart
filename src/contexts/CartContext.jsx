
import { 
  createContext,
  useContext,
  useState,
} from "react";
import PropTypes from 'prop-types'

const CartContext = createContext()

const CartProvider = ({ children }) => {

  const [cartDisplay, setCartDisplay] = useState(false)

  const onCartBtnClick = () => {
    setCartDisplay((prev) => !prev)
  }

  return (
    <CartContext.Provider value={{ cartDisplay, onCartBtnClick }}>
      {children}
    </CartContext.Provider>
  )
}

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

const useCart = () => useContext(CartContext)

export { CartProvider, useCart }
