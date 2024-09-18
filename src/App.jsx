import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from "./components/HomePage"
import PriceTab from "./components/PriceTab"
import SignIn from './components/SignIn';

function App() {

  return (
    // <div className="mt-[46px]">
    //   <HomePage />
    // </div>
    <Router>
      <PriceTab price="$3210" />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  )
}

export default App
