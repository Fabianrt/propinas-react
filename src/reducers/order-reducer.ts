import { MenuItem, OrderItem } from "../types/MenuTypes";

export type OrderActions =
    { type: 'add-item', payload: { item: MenuItem } } |
    { type: 'remove-item', payload: { id: MenuItem['id'] } } |
    { type: 'add-tip', payload: { tip: number } } |
    { type: 'reset-order' }

export type OrderState = {
    order: OrderItem[],
    tip: number
}

export const initialState: OrderState = {
    order: [],
    tip: 0
}

export const orderReducer = (
    state: OrderState = initialState,
    action: OrderActions
) => {
    if (action.type === 'add-item') {
        const itemExist = state.order.find((data) => data.item.id == action.payload.item.id)
        let order: OrderItem[] = []
        if (itemExist) {
            order = state.order.map((data) => data.item.id === action.payload.item.id ? { ...data, quantity: data.quantity + 1 } : data)
        }
        else {
            const newItem = { item: action.payload.item, quantity: 1 }
            order = [...state.order, newItem]
        }

        return {
            ...state,
            order: order
        }
    }
    if (action.type === 'reset-order') {
        return {
            ...state,
            order: []
        }
    }

    if (action.type === 'add-tip') {
        return {
            ...state,
            tip: action.payload.tip

        }
    }

    if (action.type === 'remove-item') {
        const itemExist = state.order.find((data) => data.item.id === action.payload.id)
        let updateOrder: OrderItem[] = []
        if (itemExist) {
            updateOrder = state.order.map((data) => data.item.id === action.payload.id ? { ...data, quantity: data.quantity - 1 } : data)
            if (itemExist.quantity === 1) {
                updateOrder = state.order.filter(item => item.item.id !== action.payload.id)
            }
        }
        return {
            ...state,
            order: updateOrder
        }
    }
}