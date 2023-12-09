
import Header from './components/Header/Header'
import DisplayBtns from './components/DisplayBtns/DisplayBtns'
import HomePage from './components/HomePage/HomePage'
import ShopPage from './components/ShopPage/ShopPage'
import Footer from './components/Footer/Footer'
import styles from './App.module.css'

function App() {

  return (
    <div className={styles.mainContainer}>
      <Header />
      <DisplayBtns />
      <HomePage />
      <ShopPage />
      <Footer />
    </div>
  )
}

export default App
