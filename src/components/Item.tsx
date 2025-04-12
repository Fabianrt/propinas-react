import { Dispatch } from "react"
import { MenuItem } from "../types/MenuTypes"
import { OrderActions } from "../reducers/order-reducer"

type ItemProps = {
    item: MenuItem,
    dispatch: Dispatch<OrderActions>
}

const Item = ({ item, dispatch}: ItemProps) => {
    const { name, price } = item

    return (
        <div
            className="w-full flex justify-between border-cyan-300 border-2 rounded-sm h-9 items-center px-3 my-2 hover:bg-black hover:text-white hover: cursor-pointer"
            onClick={() =>{
                dispatch({type: 'add-item', payload:{item: item}})         
            }}
        >
            <h3 className="font-light">{name}</h3>
            <h3 className="font-bold">${price}</h3>
        </div>
    )
}

export default Item