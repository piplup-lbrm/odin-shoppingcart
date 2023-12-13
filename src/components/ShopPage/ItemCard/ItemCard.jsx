
/********************************* imports **********************************/
import { useParams } from 'react-router-dom'
import { useItems } from '../../../contexts'
import styles from './ItemCard.module.css'

function ItemCard() {

  const { id } = useParams()
  const items = useItems()
  const selectedItem = items.find((item) => item.id.toString() === id)
  console.log(selectedItem)

  return (
    <div>
    { selectedItem && (
      <div className={styles.mainContainer}>
        <div>
          <h1>Item Details</h1>
          <div key={selectedItem.id}>
            <h2>{selectedItem.title}</h2>
            <div className={styles.detailsContainer}>
              <img 
                className={styles.imgDisplay}
                src={selectedItem.image} 
                alt={selectedItem.title} />
              <p className={styles.discription}>
                Description: {selectedItem.description}
              </p>
            </div>
            <p>Price: ${selectedItem.price}</p>
            <p>Rating: {selectedItem.rating.rate} 
              ({selectedItem.rating.count} reviews)</p>
          </div>
          <button>Add to Cart</button>
          <button>Close</button>
        </div>
      </div>
      )}
    </div>
  )
}

export default ItemCard
