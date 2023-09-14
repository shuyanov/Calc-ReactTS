import './App.css'
import NumberProvider from './Components/NumberProvider/NumberProvider'
import { Calc } from './Components/Calc/Calc'

function App() {

  return (
    <div>
      <NumberProvider>
        <Calc />
      </NumberProvider>
    </div>
  )
}

export default App
