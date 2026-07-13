

import User from "./pages/Users"
import Products from "./pages/Products"
import DashBoard from "./components/DashBoard"
import Home from "./pages/Home"
import { BrowserRouter, Routes, Route} from "react-router-dom"

function App() {


  return(
    <>
      
      <BrowserRouter>

          <Routes>

            <Route path='/' element={<DashBoard/>}>
            <Route path='users' element={<User/>}/>
            <Route path='products' element={<Products/>}/>

          </Route>

          </Routes>

      </BrowserRouter>

    </>
  )
}