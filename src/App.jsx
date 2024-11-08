import ShoppingMarket from './components/shopping'
import AuthPage from './components/signUp-logIn'
import HomePage from './components/home'
import AdminDashboard from './components/admin-dashboard'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/ACafe/admin" element={<AdminDashboard></AdminDashboard>} />

          <Route path="/ACafe" element={<HomePage></HomePage>}></Route>
          <Route path="/auth" element={<AuthPage></AuthPage>}></Route>
          <Route path="/ACafe/shopping" element={<ShoppingMarket></ShoppingMarket>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
