import React from 'react';
import { observer } from 'mobx-react'

const Item = observer((props) => {
    const { item } = props
    const { store } = props

    const buyItem = () => {
        store.buyItem(item.name)
    }

    const changePrice = () => {
        const newPrice = prompt('Enter new price')
        store.changePrice(item.name, newPrice)
    }

    return (
        <li className="Item">
            <span onClick={changePrice}>{item.quantity} {item.name} available at ${item.price} per item </span>
            <button onClick={buyItem}>Buy</button>
        </li>
    );
})

export default Item;