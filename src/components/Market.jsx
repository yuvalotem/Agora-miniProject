import React from 'react';
import { inject, observer } from 'mobx-react'
import Item from './Item';

const Market = inject('newInventory')(observer((props) => {
    const { newInventory } = props

    const addItem = (e) => {
        if (e.key === 'Enter') {
            newInventory.addItem(e.target.value)
            e.target.value=''
        }
    }

    return (
        <div className="Market">
            <span className='title'>A<span className='g'>G</span><span className='o'>O</span><span className='r'>R</span>A</span>
            <input placeholder='Enter item' onKeyDown={addItem} />
            <p className='available'>{newInventory.numItems} items availabel</p>
            <div className='container'>
                {newInventory.items.map(i => <Item key={i.name} item={i} />)}
            </div>
        </div>
    );
}))

export default Market;