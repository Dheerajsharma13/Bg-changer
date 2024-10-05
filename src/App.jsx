import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
 

function App() {
  const [color, setColor] = useState("olive")

  return (
    
      <div className= "w-full h-screen duration-200"
      style={{backgroundColor: color}}>
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
            <button
            onClick={()=>setColor("red")}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{backgroundColor:"red"}}
            >red
              </button>
              <button 
               onClick={()=>setColor("yellow")}
               className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{backgroundColor:'yellow'}}
            >yellow</button>
              <button 
               onClick={()=>setColor("white")}
               className='outline-none px-4 py-1 rounded-full text-gray-300 shadow-lg'
            style={{backgroundColor:"white"}}
            >white  </button>
              <button 
              onClick={()=>setColor("green")}
              className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{backgroundColor:"green"}}
            >green </button>
              <button 
               onClick={()=>setColor("black")}
              className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{backgroundColor:"black"}}
            >black </button>
              <button 
               onClick={()=>setColor("lime")}
              className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{backgroundColor:'lime'}}
            >lime </button>
             <button 
              onClick={()=>setColor("orange")}
             className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{backgroundColor:'orange'}}
            >orange </button>
             <button 
              onClick={()=>setColor("aqua")}
             className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{backgroundColor:'aqua'}}
            >aqua</button>
            <button 
              onClick={()=>setColor("blue")}
             className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{backgroundColor:'blue'}}
            >blue</button>
              
              </div>
        </div>
      </div>
    
  )
}

export default App