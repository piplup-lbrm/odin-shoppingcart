
/********************************** imports **********************************/
import styles from './ShopPage.module.css'
/***************************** import components *****************************/
import Cart from './Cart/Cart'
import GenreNav from './GenreNav/GenreNav'
import ItemList from './ItemList/ItemList'
/****************************** import contexts ******************************/
import { useCart } from '../../contexts'

function ShopPage() {

  const { cartDisplay } = useCart()

  return (
    <div className={styles.shopPageContainer}>
      <GenreNav />
      <ItemList />
      { cartDisplay && <Cart /> }
    </div>
  )
}

export default ShopPage
