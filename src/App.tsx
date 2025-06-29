import { Route, Routes } from 'react-router-dom';
import './App.css'
import Catalog from './pages/catalog';
import CharacterPage from './pages/character';



function App() {

  return (
    <Routes>
        <Route path="/" element={<Catalog />} />
        <Route path="/character/:name" element={<CharacterPage />} />
    </Routes>
  )
  
}

export default App
