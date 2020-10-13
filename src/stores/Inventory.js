import { action, observable } from 'mobx'
import Item from './Item'

class Inventory {
    @observable items = []

    @action addItem = (name) =>{
        if(!this.items.some(i => i.name === name)){
        const newItem = new Item(name)
        this.items.push(newItem)
        }else{
            const item = this.items.find(i => i.name === name)
            item.quantity++
        }
    }

    @action buyItem = (name) =>{
        const newItem = this.items.find(i => i.name === name)
        if(newItem.quantity > 1){
            newItem.quantity--
        }else{
            this.items = this.items.filter(i => i.name !== name)
        }
    }

    @action changePrice = (name, price) =>{
        const item = this.items.find(i => i.name === name)
        item.price = price
    }
}
export default Inventory