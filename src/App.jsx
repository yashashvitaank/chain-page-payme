import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import Layout from "./components/Layout";
import BlockDescription from "./components/BlockDescription";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="blocks/:id" element={<BlockDescription/>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
