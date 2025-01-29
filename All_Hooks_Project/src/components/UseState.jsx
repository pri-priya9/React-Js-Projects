import { useState } from 'react'
import './UseState.css'

function UseState() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='usestate-div'>
      <h1 className='usestate-heading'>Counter App</h1>
      <h2 className='usestate-h2'>{count}</h2>

      <button className='usestate-button'
      onClick={() => setCount(count + 1)}>Increment
      </button>

      <button className='usestate-button'
      onClick={() => setCount(count - 1)}
      disabled={count === 0} 

      >Decrement
      </button>

    <button className='usestate-button' onClick={() => setCount(0)}>Reset</button>

    </div>
  </>
  )
}

export default UseState
