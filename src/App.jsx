import { useState } from "react"

function App() {
  const [color, setColor] = useState("olive")
  const [message, setMessage] = useState("");

  const handelClick = (e) => {
    // console.log(e.target.style.backgroundColor);
    setColor(e.target.style.backgroundColor);
    setMessage("Yeahh, I have changed the background color to " + e.target.style.backgroundColor);
  }

  return (
    <>
    <div className="w-full h-screen duration-200" style={{backgroundColor:color}} >
      <h1 className="text-center text-4xl text-black mt-12">Welcome in Colour Changer App</h1>
      <p className="text-center text-xl text-white mt-4">{message}</p>
          <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
            <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl ">
              <button
                onClick={handelClick}
                className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{backgroundColor:"red"}}
              >Red</button>
              <button
                onClick={()=> setColor("pink")}
                className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{backgroundColor:"pink"}}
              >Pink</button>
              <button
                onClick={()=> setColor("blue")}
                className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{backgroundColor:"blue"}}
              >Blue</button>
              <button
                onClick={()=> setColor("purple")}
                className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{backgroundColor:"purple"}}
              >Purple</button>
              <button
                onClick={()=> setColor("lavender")}
                className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{backgroundColor:"lavender"}}
              >Lavender</button>
              <button
                onClick={()=> setColor("black")}
                className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"black"}}
              >Black</button>
              <button
                onClick={()=> setColor("powderBlue")}
                className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{backgroundColor:"powderBlue"}}
              >PowderBlue</button>
            </div>
          </div>
    </div>

    </>
  )
}

export default App
