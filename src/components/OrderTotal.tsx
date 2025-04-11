import { useMemo } from "react"
import { OrderItem } from "../types/MenuTypes"

type OrderTotalProps={
    order: OrderItem[]
}

const OrderTotal = ({order}:OrderTotalProps) => {
    
    const subTotalAmout= useMemo(()=>{
       return order.reduce((total, item)=> total + (item.item.price*item.quantity),0)
    }, [order])


  return (
    <div>
        <h2 className="font-black text-md">Total y Propina:</h2>
        <p>Subtotal:  {'  '}
            <span className="font-bold">${subTotalAmout}</span>
        </p>
        <p>Propina:  {'  '} </p>
            <form className="flex flex-col justify-start mx-5">
                <div className="flex">
                    <input name='propina' type="radio" value={20}/><label>20%</label>
                </div>
                <div className="flex">
                    <input name='propina' type="radio" value={15}/><label>15%</label>
                </div>
                <div className="flex">
                    <input name='propina' type="radio" value={10}/><label>10%</label>
                </div>                
                <div className="flex">
                    <input name='propina' type="radio" value={0}/><label>Sin Propina</label>
                </div>              
            </form>
            <span className="font-bold">$0</span>
       
        <p>Total:  {'  '}
            <span className="font-bold">$0</span>
        </p>
        <button></button>
    </div>
    
  )
}

export default OrderTotal