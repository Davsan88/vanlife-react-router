import './App.css'
import { Routes, Route } from 'react-router'
import Home from './pages/Home'
import About from './pages/About'
import Vans from './pages/Vans/Vans'
import VanDetail from './pages/Vans/VanDetail'
import Layout from './components/Layout'
import Dashboard from './pages/Host/Dashboard'
import Income from './pages/Host/Income'
import Reviews from './pages/Host/Reviews'


function App() {

  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route
            path='/home'
            element={<Home />}
          />

          <Route
            path='/about'
            element={<About />}
          />

          <Route
            path='/vans'
            element={<Vans />}
          />

          <Route
            path='/van/:id'
            element={<VanDetail />}
          />
        </Route>

        <Route
          path='/host'
          element={<Dashboard />}
        />
        <Route
          path='/host/income'
          element={<Income />}
        />
        <Route
          path='/host/reviews'
          element={<Reviews />}
        />

      </Routes>

      <footer>
        <span className='footer-span'>
          © 2026 #VANLIFE
        </span>
      </footer>
    </>
  )
}

export default App
