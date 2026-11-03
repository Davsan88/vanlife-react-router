import './App.css'
import { Routes, Route } from 'react-router'
import Home from './pages/Home'
import About from './pages/About'
import Vans from './pages/Vans/Vans'
import VanDetail from './pages/Vans/VanDetail'
import Layout from './components/Layout'
import HostLayout from './components/HostLayout'
import Dashboard from './pages/Host/Dashboard'
import Income from './pages/Host/Income'
import Reviews from './pages/Host/Reviews'
import VanHost from './pages/host/VanHost'
import VanDetailHost from './pages/host/VanDetailHost'
import HostVanInfo from './pages/host/HostVanInfo'
import HostVanPricing from './pages/host/HostVanPricing'
import HostVanPhotos from './pages/host/HostVanPhotos'
import NotFound from './pages/NotFound'
import Login from './pages/Login'
import AuthRequired from './components/AuthRequired'


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}
        >
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='vans/' element={<Vans />} />
          <Route path='vans/:id' element={<VanDetail />} />
          <Route path="login" element={<Login />} />

          <Route element={<AuthRequired />}>
            <Route path='host' element={<HostLayout />}  >
              <Route index element={<Dashboard />} />
              <Route path='income' element={<Income />} />
              <Route path='vans' element={<VanHost />} />
              <Route path='vans/:id' element={<VanDetailHost />}  >
                <Route index element={<HostVanInfo />} />
                <Route path='pricing' element={<HostVanPricing />} />
                <Route path='photos' element={<HostVanPhotos />} />
              </Route>
              <Route path='reviews' element={<Reviews />} />
            </Route>
          </Route>

          <Route 
            path='*'
            element={<NotFound />}
          />
        </Route>
      </Routes>
    </>
  )
}

export default App
