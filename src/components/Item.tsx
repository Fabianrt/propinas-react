import { Dispatch } from "react"
import { MenuItem } from "../types/MenuTypes"
import { OrderActions } from "../reducers/order-reducer"
import {
    Card,
    CardContent,
    CardDescription,    
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Button } from "./ui/button"

type ItemProps = {
    item: MenuItem,
    dispatch: Dispatch<OrderActions>
}

const Item = ({ item, dispatch}: ItemProps) => {
    const { name, price, img } = item

    return (
        <Card 
            className="grid grid-cols-2 my-3"                     
        >
            <CardHeader>
                <CardTitle>{name}</CardTitle>
                <CardDescription>Precio: ${price}</CardDescription>
                <Button
                    className="hover:bg-cyan-400"
                    onClick={() =>{
                        dispatch({type: 'add-item', payload:{item: item}})}}
                >Agregar</Button>
            </CardHeader>     
            <CardContent className="flex items-center justify-center">
                <img src={img} className="h-50 w-50 object-cover rounded-lg"/>
            </CardContent>       
        </Card>
    )
}

export default Item
