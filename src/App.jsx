import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from './components'
import { Explore, Home, Saved } from './pages'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="saved" element={<Saved />} />
          <Route path="explore" element={<Explore />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
