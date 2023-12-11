import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, createBrowserRouter, RouterProvider, createRoutesFromElements } from "react-router-dom"
import Error from './pages/Error'
import Map from './Map.jsx'
import Home from './pages/Home.jsx'
import Reports from './pages/Reports.jsx'
import Products from './pages/Products.jsx'
import Team from './pages/Team.jsx'
import Messages from './pages/Messages.jsx'
import Support from './pages/Support.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Map />} errorElement={<Error />}>
      <Route path='' element={<Home />} />
      <Route path='reports' element={<Reports />} />
      <Route path='products' element={<Products />} />
      <Route path='team' element={<Team />} />
      <Route path='messages' element={<Messages />} />
      <Route path='support' element={<Support />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)