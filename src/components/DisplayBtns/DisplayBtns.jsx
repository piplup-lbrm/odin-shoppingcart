

import styles from './DisplayBtns.module.css'

function DisplayBtns() {

  return (
    <div className={styles.btnContainer}>
      <button className={styles.btn}>
        Home
      </button>
      <button className={styles.btn}>
        Shop
      </button>
    </div>
  )
}

export default DisplayBtns
