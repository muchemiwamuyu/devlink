import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import ClientDashboard from './pages/ClientDashboard'
import SellerDashboard from './pages/SellerDashboard'

function App() {

  return (
    <Routes>
      <Route path='/' element={ <Home/> }/>
      <Route path='/dashboard' element={ <Dashboard/> }/>
      <Route path='/client-dashboard' element={ <ClientDashboard/> }/>
      <Route path='/seller-dashboard' element={ <SellerDashboard/> }/>
    </Routes>
  )
}

export default App
