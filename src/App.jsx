import { useState } from "react";

function App() {
  const [colour, setColour] = useState("black");

  return (
    <>
      <div className="w-full h-screen duration-200" style={{backgroundColor: colour}}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="fixed flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button
            onClick={() => setColour("red")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "red"}}>
              Red
            </button>
            <button
            onClick={() => setColour("green")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "green"}}>
              Green
            </button>
            <button
            onClick={() => setColour("blue")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "blue"}}>
              Blue
            </button>
            <button
            onClick={() => setColour("olive")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "olive"}}>
              Olive
            </button>
            <button
            onClick={() => setColour("grey")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "grey"}}>
              Grey
            </button>
            <button
            onClick={() => setColour("yellow")}
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{backgroundColor: "yellow"}}>
              Yellow
            </button>
            <button
            onClick={() => setColour("pink")}
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{backgroundColor: "pink"}}>
              Pink
            </button>
            <button
            onClick={() => setColour("purple")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "purple"}}>
              Purple
            </button>
            <button
            onClick={() => setColour("lavender")}
            className="outline-none px-4 py-1 rounded-full text-balck shadow-lg" style={{backgroundColor: "lavender"}}>
              Lavender
            </button>
            <button
            onClick={() => setColour("white")}
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{backgroundColor: "white"}}>
              White
            </button>
            <button
            onClick={() => setColour("black")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "black"}}>
              Black
            </button>
          </div>
        </div>
      </div> 
    </>
  )
}

export default App
