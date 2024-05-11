import { Excalidraw } from "@excalidraw/excalidraw"

function App() {
  console.log(Excalidraw)
  return (
    <>
      <div className="flex flex-col w-full h-screen  tracking-wider justify-center items-center bg-slate-900 text-white" >
        <div className="h-full w-full bg-black" >
          <Excalidraw />
        </div>
      </div>

    </>
  )
}

export default App
