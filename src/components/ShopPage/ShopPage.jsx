
/********************************** imports **********************************/
import styles from './ShopPage.module.css'
/***************************** import components *****************************/
import Cart from './Cart/Cart'
import GenreNav from './GenreNav/GenreNav'
import ItemList from './ItemList/ItemList'
import { Outlet, useParams } from 'react-router-dom'
/****************************** import contexts ******************************/
import { useCart } from '../../contexts'

function ShopPage() {

  const { cartDisplay } = useCart()
  const { id } = useParams()

  return (
    <div className={styles.shopPageContainer}>
      <GenreNav />
      { !id && <ItemList /> }
      <Outlet />
      { cartDisplay && <Cart /> }
    </div>
  )
}

export default ShopPage
