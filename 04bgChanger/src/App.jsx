import { useState } from "react"

function App() {
  const [color,setColor] = useState("pink")

  return (
  <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}
  > 
  <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
    <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl">
      <button
      onClick={()=> setColor("red")}  // a callback :a fucn that passes into another func
      className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
      style={{backgroundColor:"red"}}
      >Red</button>
      <button
       onClick={()=> setColor("yellow")}
      className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
      style={{backgroundColor:"yellow"}}
      >Yellow</button>
      <button
       onClick={()=> setColor("blue")}
      className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
      style={{backgroundColor:"blue"}}
      >Blue</button>
      <button
       onClick={()=> setColor("violet")}
      className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
      style={{backgroundColor:"violet"}}
      >Violet</button>
      <button
       onClick={()=> setColor("black")}
      className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
      style={{backgroundColor:"black"}}
      >Black</button>
      <button
       onClick={()=> setColor("purple")}
      className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
      style={{backgroundColor:"purple"}}
      >Purple</button>
      <button
       onClick={()=> setColor("green")}
      className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
      style={{backgroundColor:"green"}}
      >Green</button>
      <button
       onClick={()=> setColor("grey")}  
      className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
      style={{backgroundColor:"grey"}}
      >Grey</button>
      <button
       onClick={()=> setColor("lavender")}
      className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
      style={{backgroundColor:"lavender"}}
      >lavendour</button>
    </div>
  </div>
  </div>
  
  
  )
}

export default App
