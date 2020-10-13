import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Item  from './stores/Item'
import Inventory from './stores/Inventory'

const newInventory = new Inventory()
const newItem = new Item('car')
newInventory.items.push(newItem)

ReactDOM.render(
  <React.StrictMode>
    <App store={newInventory}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
