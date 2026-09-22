import './App.css'
import { Routes, Route } from 'react-router'
import Home from './pages/Home'
import About from './pages/About'
import Vans from './pages/vans/Vans'
import VanDetail from './pages/vans/VanDetail'
import Layout from './components/Layout'
import HostLayout from './components/HostLayout'
import Dashboard from './pages/host/Dashboard'
import Income from './pages/host/Income'
import Reviews from './pages/host/Reviews'


function App() {

  return (
    <>
      <Routes>
        <Route
          path='/'
          element={<Layout />}
        >
          <Route
            index
            element={<Home />}
          />
          <Route
            path='about'
            element={<About />}
          />
          <Route
            path='vans'
            element={<Vans />}
          />
          <Route
            path='van/:id'
            element={<VanDetail />}
          />

          <Route
            path='host'
            element={<HostLayout />}
          >
            <Route
              index
              element={<Dashboard />}
            />
            <Route
              path='income'
              element={<Income />}
            />
            <Route
              path='reviews'
              element={<Reviews />}
            />
          </Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
