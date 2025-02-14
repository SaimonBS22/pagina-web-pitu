import NavBar from './components/navbar/navbar.jsx'
import Inicio from './components/inicio/inicio.jsx'
import AreasDePractica from './components/areasPracticas/areasPracticas.jsx'
import SobreNosotros from './components/sobreNosotros/sobreNosotros.jsx'
import DañosYPerjuicios from './components/dañosPerjuicios/dañosPerjuicios.jsx'
import Contacto from './components/contacto/contacto.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <>
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/inicio' element={<Inicio/>}></Route>
        <Route path="/sobreNosotros" element={<SobreNosotros/>}></Route>
        <Route path='/areasDePractica' element={<AreasDePractica/>}></Route>
        <Route path='/dañosPerjuicios' element={<DañosYPerjuicios/>}></Route>
        <Route path='/contacto' element={<Contacto/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
