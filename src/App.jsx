import ShoppingMarket from './components/shopping'
import AuthPage from './components/signUp-logIn'
import HomePage from './components/home'
import AdminDashboard from './components/admin-dashboard'
import NotFoundPage from './components/notFound'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'

function App() {
  return (
    <BrowserRouter basename="/ACafe"> 
      <Routes>
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/shopping" element={<ShoppingMarket />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
