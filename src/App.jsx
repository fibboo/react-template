import {useState} from 'react'
import CountButton from './componets/CountButton'

function App() {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count => count + 1)
  }

  const decrement = () => {
    setCount(count => count - 1)
  }

  return (
      <>

        <div
            className="min-h-screen flex flex-col justify-start items-center px-4">
            <h2 className="text-4xl sm:text-6xl font-bold mb-4 mt-3 text-center drop-shadow-lg">
              Best clicker ever!
            </h2>
            <p className="text-lg sm:text-xl mb-8 text-center max-w-xl">
              Track your counts - plan your clicks.
            </p>
            <div className="flex flex-row items-center gap-4">
              <CountButton onClick={decrement}>-</CountButton>
              <p className="text-2xl sm:text-4xl font-bold text-center drop-shadow-lg">
                {count}
              </p>
              <CountButton onClick={increment}>+</CountButton>
            </div>
        </div>

      </>
  )
}

export default App
