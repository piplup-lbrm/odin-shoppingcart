
/********************************** imports **********************************/
import { Link } from 'react-router-dom'
import styles from './DisplayBtns.module.css'
/****************************** import contexts ******************************/
import { useCart } from '../../contexts'


function DisplayBtns() {

  const { cartDisplay, onCartBtnClick } = useCart()

  return (
    <div className={styles.btnContainer}>
      <Link 
        to={`/home`}
        className={styles.btn}>
        Home
      </Link>
      <Link 
        to={`/shop`}
        className={styles.btn}>
        Shop
      </Link>
      <button 
        className={cartDisplay ? styles.btnActive : styles.btn}
        onClick={() => onCartBtnClick()}>
        Shopping Cart
      </button>
    </div>
  )
}

export default DisplayBtns

