

import { createContext, useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types'

const ItemContext = createContext();

export const ItemProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  return <ItemContext.Provider value={items}>{children}</ItemContext.Provider>;
};

ItemProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useItems = () => useContext(ItemContext);

