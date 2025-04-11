import './App.css'
import Item from './components/Item'
import { menuItems } from './mock/MenuItems'
import useOrder from './hooks/useOrder'
import OrderManagement from './components/OrderManagement'
import OrderTotal from './components/OrderTotal'

function App() { 

  const {order, addItem, resetOrder, removeItem} = useOrder()

  return (
    <>
      <header className="bg-cyan-200 min-w-full h-15 flex justify-center items-center">
        <h1 className="text-center text-xl font-black">Calculadora de Consumo</h1>
      </header>

      <main className='mx-auto max-w-7xl my-20'>      
        

        <div className='grid gap-5 mx-10 md:grid-cols-2'>           
          <div>            
            <h1 className='font-bold text-center'>Menú</h1>
            {menuItems.map((item, index)=>(
              <Item 
                key={index} 
                item={item}
                addItem={addItem}
              />
            ))}
            <button
              className='rounded-sm border-2 bg-cyan-200 border-black font-bold p-2 hover:bg-black hover:text-white hover:cursor-pointer'
              onClick={resetOrder}
            >Reset
            </button>
          </div>
          <div className='border border-dashed border-cyan-100 p-5 rounded-md space-y-10'>            
            <h1 className='font-bold text-center'>Consumo</h1>
            <OrderManagement
              order={order}
              removeItem={removeItem}
            />
            <OrderTotal
              order={order}
            />
          </div>          
        </div>        
      </main>
    </>
  )
}

export default App
