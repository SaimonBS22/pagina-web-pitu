import NavBar from './components/navbar/navbar.jsx'
import Inicio from './components/inicio/inicio.jsx'
import AreasDePractica from './components/areasPracticas/areasPracticas.jsx'
import SobreNosotros from './components/sobreNosotros/sobreNosotros.jsx'
import DañosYPerjuicios from './components/dañosPerjuicios/dañosPerjuicios.jsx'
import Sucesiones from './components/areasPracticas/especializaciones/sucesiones.jsx'
import DerechoCivil from './components/areasPracticas/especializaciones/derechoCivil.jsx'
import Contacto from './components/contacto/contacto.jsx'
import Whatsapp from './components/whatsapp/whatsapp.jsx'
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Footer from './components/footer/footer.jsx'

function App() {

  const [isMenuVisible, setIsMenuVisible] = useState(true);

  const hideMenu = () => {
    setIsMenuVisible(false);
  };

  const showMenu = () => {
    setIsMenuVisible(true);
  };



  return (
    <>
    <BrowserRouter>
      <NavBar  isMenuVisible={isMenuVisible}
        showMenu={showMenu}
        hideMenu={hideMenu}/>
  
      <Routes>
        <Route path='/inicio' element={<Inicio/>}></Route>
        <Route path="/sobreNosotros" element={<SobreNosotros/>}></Route>
        <Route path='/areasDePractica' element={<AreasDePractica/>}></Route>
        <Route path='/dañosPerjuicios' element={<DañosYPerjuicios/>}></Route>
        <Route path='/contacto' element={<Contacto/>}></Route>

        <Route path='/sucesiones' element={<Sucesiones/>}></Route>
        <Route path='/derecho-civil' element={<DerechoCivil/>}></Route>
      </Routes>
      <Whatsapp/>
      <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
