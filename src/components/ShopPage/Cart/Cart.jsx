
import styles from './Cart.module.css'

function Cart() {

  return (
    <div className={styles.cartContainer}>
      <h3 className={styles.cartTitle}>Cart</h3>
      <div className={styles.cartHeader}>
        <div className={styles.cartColumn}>Item</div>
        <div className={styles.cartColumn}>Quantity</div>
        <div className={styles.cartColumn}>Price</div>
      </div>

    </div>
  )
}

export default Cart

//      <div className="cart-items">
//        {cartItems.map((item, index) => (
//          <div key={index} className="cart-item">
//            <div className="cart-column">{item.item}</div>
//            <div className="cart-column">{item.quantity}</div>
//            <div className="cart-column">${item.price.toFixed(2)}</div>
//          </div>
//        ))}
//      </div>
