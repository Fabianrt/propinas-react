import { useState } from 'react'
import { MenuItem, OrderItem } from '../types/MenuTypes'


export default function useOrder() {

    const [order, setOrder] = useState<OrderItem[]>([])

    const resetOrder =()=>{
        setOrder([])
    }

    const removeItem=(id:MenuItem['id'])=>{
        const itemExist = order.find((data)=>data.item.id===id)
        if(itemExist){
            let updateOrder = order.map((data)=>data.item.id === id ? {...data, quantity:data.quantity-1} : data)           
            if(itemExist.quantity===1){
                updateOrder = order.filter(item=>item.item.id !== id)                
            }
            setOrder(updateOrder)
        }
    }

    const addItem = (item: MenuItem) => {
        const itemExist = order.find((data)=>data.item.id == item.id)
        if(itemExist){                    
            const updateOrder = order.map((data)=>data.item.id === item.id ? {...data, quantity:data.quantity+1} : data)
            setOrder(updateOrder)
        }
        else{           
            setOrder([...order, {item: item, quantity: 1}])
        }                    
    }

    
    return {
        order,
        addItem,
        resetOrder,
        removeItem
    }
}

