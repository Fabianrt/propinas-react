import { MenuItem } from "../types/MenuTypes"

type ItemProps = {
    item: MenuItem,
    addItem: (item: MenuItem) => void
}

const Item = ({ item, addItem }: ItemProps) => {
    const { name, price } = item

    return (
        <div
            className="w-full flex justify-between border-cyan-300 border-2 rounded-sm h-9 items-center px-3 my-2 hover:bg-black hover:text-white hover: cursor-pointer"
            onClick={() =>{
                addItem(item)                
            }}
        >
            <h3 className="font-light">{name}</h3>
            <h3 className="font-bold">${price}</h3>
        </div>
    )
}

export default Item