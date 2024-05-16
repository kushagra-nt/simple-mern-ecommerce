import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import HomePage from "./pages/homepage"
import OrderPage from "./pages/orderpage"

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/place-order" element={<OrderPage />} />
      </Routes>
    </Router>
  )
}

export default App
