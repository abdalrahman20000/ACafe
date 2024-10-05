import { useState } from 'react'
import ShoppingMarket from './components/shopping'
import AuthPage from './components/signUp-logIn'
import HomePage from './components/home'
import AboutUsPage from './components/about'
import ContactUsPage from './components/contact'
import MenuPage from './components/menu'
import AdminDashboard from './components/admin-dashboard'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/ACafe/admin" element={<AdminDashboard></AdminDashboard>} />

          <Route path="/ACafe" element={<HomePage></HomePage>}></Route>
          <Route path="/auth" element={<AuthPage></AuthPage>}></Route>
          <Route path="/ACafe/shopping" element={<ShoppingMarket></ShoppingMarket>}></Route>
          <Route path="/ACafe/menu" element={<MenuPage></MenuPage>}></Route>
          <Route path="/ACafe/about" element={<AboutUsPage></AboutUsPage>} />
          <Route path="/ACafe/contact" element={<ContactUsPage></ContactUsPage>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App