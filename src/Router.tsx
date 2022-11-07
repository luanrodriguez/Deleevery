import { Routes, Route } from 'react-router-dom'
import { List } from './pages/List'
import { Register } from './pages/Register'
import { Layout } from './pages/Layout'

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path='/' element={<Register />} />
        <Route path='/list' element={<List />} />
      </Route>
    </Routes>
  )
}

export default Router
