import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import Layout from "./components/Layout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="blocks/:id" element={<p>Put Your Overview Component here</p>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
