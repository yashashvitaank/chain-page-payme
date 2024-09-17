import HomePage from "./components/HomePage"
import PriceTab from "./components/PriceTab"

function App() {

  return (
    <div className="mt-[46px]">
      <PriceTab price="$3210" />
      <HomePage />
    </div>
  )
}

export default App
