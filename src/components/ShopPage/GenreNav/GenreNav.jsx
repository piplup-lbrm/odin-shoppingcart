
import styles from './GenreNav.module.css'

function GenerNav() {

  return (
    <div className={styles.genreContainer}>
      <h3 className={styles.title}>Genre</h3>
      <div className={styles.listContainer}>
        <div className={styles.listItem}>Adventure</div>
        <div className={styles.listItem}>Sci-fi</div>
        <div className={styles.listItem}>Fiction</div>
        <div className={styles.listItem}>Non-fiction</div>
        <div className={styles.listItem}>Classics</div>
        <div className={styles.listItem}>Antiquity</div>
      </div>
    </div>
  )
}

export default GenerNav
