import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes.jsx'
import './App.css'

function App() {
  return (
    <div className="theme-vibrant-energy">
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </div>
  )
}

export default App
