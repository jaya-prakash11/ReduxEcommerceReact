import { useState } from 'react'
import Header from './container/Header'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import ProductListing from './container/ProductListing'
import ProductDetailComponent from './container/ProductDetailComponent'


function App() {
  const [count, setCount] = useState(0)

  return (
    
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<ProductListing />} />
          <Route path="/product/:productId" element={<ProductDetailComponent />} />
        </Routes>
    </Router>
      </div>
    
  )
}

export default App
