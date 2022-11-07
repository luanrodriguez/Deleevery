import { Routes, Route } from 'react-router-dom'
import { List } from './pages/List'
import { Register } from './pages/Register'

function Router() {
  return (
    <Routes>
      <Route path='/' element={<Register />} />
      <Route path='/list' element={<List />} />
    </Routes>
  )
}

export default Router
