
import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
/***************************** Import Components *****************************/
import App from './App.jsx'
import ErrorPage from './ErrorPage'
import HomePage from './components/HomePage/HomePage'
import ShopPage from './components/ShopPage/ShopPage'
import ItemCard from './components/ShopPage/ItemCard/ItemCard.jsx'
import CheckOut from './components/ShopPage/CheckOut/CheckOut.jsx'

const Router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/home',
        element: <HomePage />,
      },
      {
        path: '/shop',
        element: <ShopPage />,
        children: [
          {
            path: '/shop/:id',
            element: <ItemCard />,
          },
          {
            path: '/shop/checkout',
            element: <CheckOut />
          },
        ],
      },
    ],
  },
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={Router} />
  </React.StrictMode>,
)



