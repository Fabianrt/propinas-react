import { Dispatch } from "react"
import { OrderItem } from "../types/MenuTypes"
import { OrderActions } from "../reducers/order-reducer"

type OrderManagementProps={
    order: OrderItem[],
    dispatch: Dispatch<OrderActions>
}

const OrderManagement = ({order, dispatch}: OrderManagementProps) => {
  return (
    <div>        
        <div className="space-y-3 mt-5">
            {order.length===0 ?
                <p className="text-center font-semibold">No hay Ordenes</p>
                :
                <div className="flex flex-col space-y-1">
                    {order.map((data)=>(       
                        <div key={data.item.id} className="grid grid-cols-2 p-2 border border-dashed rounded-[10px] w-full">
                            <div className="flex flex-col">
                                <p >{data.item.name} - ${data.item.price}</p>
                                <p className="font-semibold">Cantidad {data.quantity} : ${data.item.price * data.quantity}</p>                    
                            </div>
                            <div className="flex items-center justify-end">
                                <button 
                                    className=" h-8 w-8 border rounded-full bg-red-500 text-white hover:bg-black hover:cursor-pointer"
                                    onClick={()=>dispatch({type:'remove-item', payload:{id:(data.item.id)}})}
                                >X</button>
                            </div>
                        </div>             
                        
                    ))}
                </div>
            }
        </div>
    </div>
  )
}

export default OrderManagement
