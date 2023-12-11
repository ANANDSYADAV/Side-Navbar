import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'

function Map() {
  return (
    <>
        <Navbar />
        <Outlet />
    </>
  )
}

export default Map