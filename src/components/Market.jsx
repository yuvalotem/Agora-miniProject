import React from 'react';
import { observer } from 'mobx-react'
import Item from './Item';

const Market = observer((props) => {
    const { store } = props

    const addItem = (e) => {
        if (e.key === 'Enter') {
            store.addItem(e.target.value)
            e.target.value=''
        }
    }

    return (
        <div className="Market">
            <h3>market</h3>
            <input placeholder='Enter item' onKeyDown={addItem} />
            <ul>
                {store.items.map(i => <Item key={i.name} item={i} store={store} />)}
            </ul>
        </div>
    );
})

export default Market;