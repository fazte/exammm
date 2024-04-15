import './App.css'
import Header from './components/Header/Header'
import Banner from './components/Banner/Banner'
import Catalog from './components/Catalog/Catalog'
import Footer from './components/Footer/Footer'
import { Routes,Route } from 'react-router-dom'
import AppendDots from './components/SL/Sl'
import CreatePage from './components/CreatePage/CreatePage'
import Modalka from './components/Modalka/Modalka'
import { useState } from 'react'
import Basket from './components/Basket/Basket'

function App() {

	const[basket,setBasket] = useState([])

  return (
    <>
      <Header addToBasket={setBasket} basket={basket}/>
        <Routes>
          <Route path="/" element={<Banner/>}/>
          <Route path="/catalog" element={<Catalog addToBasket={setBasket} basket={basket}/>}/>
					<Route path="/basket" />
				</Routes>
      <Footer/>
    </>
  )
}

export default App
