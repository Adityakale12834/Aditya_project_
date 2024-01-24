

function App() {

  return (
    <>
      <div className="h-full w-full overflow-hidden">
      <div className="h-16 w-screen bg-dark_purple flex items-center justify-start ">
      <a className="px-3 text-pink" href="/">Home</a>
      <a className="px-3 text-pink"href="/">About</a>
      <a className="px-3 text-pink"href="/">Buy Product</a>
      <a className="px-3 text-pink"href="/">Add to Cart</a>
      <a className="px-3 text-pink"href="/">review</a>
      </div>
        <div className="h-screen w-full grid grid-row-2 grid-flow-col gap-4 bg-purple">
            <div className="flex justify-end items-center h-5/6 row-span-2 bg-faint_purple">
              <div className="flex flex-col">
              <a className="px-3 text-pink px-5" href="/">Aditya Kale</a>
              <a className="px-3 text-pink px-5" href="/">Atharv Darvekar</a>
              </div>
            </div>
            <div className=" col-span-4 row-span-2 bg-faint_purple">
              <img src="/public/component/1.jpg" alt=""/>
            </div>
        </div>
      </div>
    </>
  )
}

export default App
