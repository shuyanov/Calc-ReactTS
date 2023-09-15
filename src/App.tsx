import './App.css'
import NumberProvider from './Components/NumberProvider/NumberProvider'
import { Calc } from './Components/Calc/Calc'

function App() {

  return (
    <div className='Calc'>
      <NumberProvider>
        <Calc />
      </NumberProvider>
    </div>
  )
}

export default App
