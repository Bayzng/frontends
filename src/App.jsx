import ArtInfo from "./components/ArtInfo/ArtInfo"
import OrderConfirm from "./components/OrderConfirm/OrderConfirm"
import OrderCreation from "./components/OrderCreation/OrderCreation"
import Home from "./pages/Home/Home"
import { Routes, Route, BrowserRouter } from "react-router-dom" 
import ArtStatusProvider from './context/ArtStatusContext'
import BuyArtProvider from "./context/BuyArtContext "



function App() {

  return (
    <ArtStatusProvider>
      <BuyArtProvider>
    <BrowserRouter>
    <Routes>
      <Route>
        <Route path="/" element={<Home/>}/>
        {/* <Route path="/artinfo" element={<ArtInfo/>}/> */}
        <Route path="/orderCreation" element={<OrderCreation/>}/>
        <Route path="/artMarket" element={<OrderConfirm/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
      </BuyArtProvider>
    </ArtStatusProvider>
  )
}

export default App
