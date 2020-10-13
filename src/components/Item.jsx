import React from 'react';
import { inject, observer } from 'mobx-react'

const Item = inject('newInventory')(observer((props) => {
    const { item } = props
    const { newInventory } = props

    const buyItem = () => {
        newInventory.buyItem(item.name)
    }

    const changePrice = () => {
        const newPrice = prompt('Enter new price')
        newInventory.changePrice(item.name, newPrice)
    }

    return (
        <div className='Item'>
            <h4>{item.name}</h4>
            <p onClick={changePrice}>available at ${item.price} per item </p>
            <p>{item.quantity} bids</p>
            <button className='buyButton' onClick={buyItem}>Buy It Now</button>
        </div>
    );
}))

export default Item;