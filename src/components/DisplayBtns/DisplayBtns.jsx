
/********************************** imports **********************************/
import { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './DisplayBtns.module.css'
/****************************** import contexts ******************************/
import { useCart } from '../../contexts'


function DisplayBtns() {

  const [pageDisplay, setPageDisplay] = useState('home')
  const { cartDisplay, onCartBtnClick } = useCart()


  const onPageBtnClick = (link) => {
    setPageDisplay(link)
  }



  return (
    <div className={styles.btnContainer}>
      <Link 
        to={`/home`}
        value='home'
        className={pageDisplay === 'home' ? styles.btnActive : styles.btn}
        onClick={() => onPageBtnClick('home')}>
        Home
      </Link>
      <Link 
        to={`/shop`}
        value='shop'
        className={pageDisplay === 'shop' ? styles.btnActive : styles.btn}
        onClick={() => onPageBtnClick('shop')}>
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

