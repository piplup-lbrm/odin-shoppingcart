
import GenreNav from './GenreNav/GenreNav'
import ItemList from './ItemList/ItemList'
import Cart from './Cart/Cart'
import CheckOut from './CheckOut/CheckOut'
import styles from './ShopPage.module.css'

function ShopPage() {

  return (
    <div className={styles.shopPageContainer}>
      <GenreNav />
      <ItemList />
      <Cart />
    </div>
  )
}

export default ShopPage
