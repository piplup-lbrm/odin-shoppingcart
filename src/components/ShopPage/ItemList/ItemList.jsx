
import { useState, useEffect } from 'react'
import axios from 'axios'
import styles from './ItemList.module.css'

function ItemList() {

  const [items, setItems] = useState([])

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => {
        setItems(response.data)
      })
    .catch(error => {
        console.log('Error fetching data:', error)
    })
  }, [])

  return (
    <div className={styles.itemContainer}>
      {items.map(item => (
        <div key={item.id} className={styles.product}>
          <img src={item.image} alt={item.title} />
          <p>{item.title}</p>
          <p>${item.price}</p>
        </div>
      ))}
    </div>
  )
}

export default ItemList
