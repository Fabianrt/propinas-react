import './App.css'
import Item from './components/Item'
import { menuItems } from './mock/MenuItems'
import OrderManagement from './components/OrderManagement'
import OrderTotal from './components/OrderTotal'
import { useReducer } from 'react'
import { initialState, orderReducer } from './reducers/order-reducer'

function App() {

  const [state, dispatch] = useReducer(orderReducer, initialState)

  return (
    <>
      <header className="bg-cyan-200 min-w-full h-15 flex justify-center items-center">
        <h1 className="text-center text-xl font-black">Calculadora de Consumo</h1>
      </header>

      <main className='mx-auto max-w-7xl my-20'>        
        <div className='grid gap-5 mx-10 md:grid-cols-2'>
          <div>
            <h1 className='font-bold text-center'>Menú</h1>
            {menuItems.map((item, index) => (
              <Item
                key={index}
                item={item}
                dispatch={dispatch}
              />
            ))}
            <button
              className='rounded-sm border-2 bg-cyan-200 border-black font-bold p-2 hover:bg-black hover:text-white hover:cursor-pointer'
              onClick={() => dispatch({ type: 'reset-order' })}
            >Reset
            </button>
          </div>

          <div className='border border-dashed border-cyan-100 p-5 rounded-md space-y-10'>
            <h1 className='font-bold text-center'>Consumo</h1>
            <OrderManagement
              order={state!.order}
              dispatch={dispatch}
            />
            {state!.order.length > 0 ? <OrderTotal
              order={state!.order}
              tip={state!.tip}
              dispatch={dispatch}
            /> : null}

          </div>
        </div>
      </main>
    </>
  )
}

export default App
