import { Dispatch } from "react"
import { useMemo } from "react"
import { OrderItem } from "../types/MenuTypes"
import TipsForm from "./TipsForm"
import { OrderActions } from "../reducers/order-reducer"

type OrderTotalProps={
    order: OrderItem[],
    tip: number,
    dispatch: Dispatch<OrderActions>
}


const OrderTotal = ({order, tip, dispatch}:OrderTotalProps) => {
    
    const subTotalAmout= useMemo(()=>{
       return order.reduce((total, item)=> total + (item.item.price*item.quantity),0)
    }, [order])

    const TotalAmout = useMemo(()=>{
        return (subTotalAmout + subTotalAmout*tip/100)
    }, [order, tip, subTotalAmout])

  return (
    <div>
        <h2 className="font-black text-md">Total y Propina:</h2>
        <p>Subtotal:  {'  '}
            <span className="font-bold">${subTotalAmout}</span>
        </p>
        <p>Propina:  {'  '} </p>
            <TipsForm dispatch = {dispatch}/>
        <p>Total:  {'  '}
            <span className="font-bold">${TotalAmout}</span>
        </p>
        <button></button>
    </div>
    
  )
}

export default OrderTotal