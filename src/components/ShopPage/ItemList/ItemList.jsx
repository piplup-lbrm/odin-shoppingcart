
/********************************** imports **********************************/
import styles from './ItemList.module.css'

/***************************** import components *****************************/
import { Link } from 'react-router-dom'

/****************************** import contexts ******************************/
import { useItems } from '../../../contexts'

function ItemList() {

  const items = useItems()

  if (!items) {
    return <div>Loading...</div>
  }

  return (
    <div className={styles.itemContainer}>
      {items.map(item => (
        <Link 
          className={styles.link}
          key={item.id} 
          to={`/shop/${item.id}`}>
          <div className={styles.product}>
            <img src={item.image} alt={item.title} />
            <p>{item.title}</p>
            <p>${item.price}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default ItemList
