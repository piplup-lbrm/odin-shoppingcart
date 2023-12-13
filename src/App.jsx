
/***************************** import components *****************************/
import Header from './components/Header/Header'
import DisplayBtns from './components/DisplayBtns/DisplayBtns'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'
/********************************** imports **********************************/
import styles from './App.module.css'
/****************************** import contexts ******************************/
import { CartProvider } from './contexts'
import { ItemProvider } from './contexts'

function App() {

  return (
    <div className={styles.mainContainer}>
      <CartProvider>
        <ItemProvider>
          <Header />
          <DisplayBtns />
          <Outlet />
          <Footer />
        </ItemProvider>
      </CartProvider>
    </div>
  )
}

export default App
