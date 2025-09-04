import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import ThemeToggle from './components/ThemeToggle.jsx'
import App from './App.jsx'
import Results from './pages/Results.jsx'
import Home from './pages/Home.jsx'
import Review from './pages/Review.jsx'
import Admin from './pages/Admin.jsx'

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/quiz/:subject', element: <App /> },
  { path: '/results', element: <Results /> },
  { path: '/review', element: <Review /> },
  { path: '/admin', element: <Admin /> },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="page"><div className="container"><RouterProvider router={router} /></div></div>
    <ThemeToggle />
  </StrictMode>,
)
