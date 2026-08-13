import { BrowserRouter, Routes, Route } from 'react-router-dom'

import React from 'react'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Signup from './pages/Signup'
// import Budget from './components/expenses/Budget'
// import AddExpense from './components/expenses/AddExpense'
// import Settings from './pages/Settings'
// import History from './components/expenses/History'



const App = () => {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        
      </Routes>
    </BrowserRouter>
  )
}

export default App
