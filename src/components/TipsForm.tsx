import { Dispatch, SetStateAction } from "react"
import { OrderActions } from "../reducers/order-reducer"

const tipOptions =[
    {
        id:'tip-1',
        value: 10,
        label: '10%'
    },
    {
        id:'tip-2',
        value: 20,
        label: '20%'
    },
    {
        id:'tip-3',
        value: 15,
        label: '15%'
    },
    {
        id:'tip-4',
        value: 0,
        label: 'Sin Propina'
    }
]

type TipsFormProps ={    
   dispatch : Dispatch<OrderActions>
}

const TipsForm = ({dispatch}: TipsFormProps) => {
   
    const handleChange=(value:number)=>{
        dispatch({type:'add-tip', payload:{tip:+value}})
    }

    return (
        <>
            <form className="flex flex-col justify-start mx-5">
                {tipOptions.map((item)=>{
                    return (
                        <div key={item.id} className="flex gap-2">                            
                            <input
                                id={item.id}
                                type="radio"
                                name="tips"
                                value={item.value}   
                                onChange={(e)=>handleChange(+e.target.value)}                             
                            />
                            <label htmlFor={item.id}>{item.label}</label>
                        </div>
                    )
                })}
            </form>
        </>
    )
}

export default TipsForm