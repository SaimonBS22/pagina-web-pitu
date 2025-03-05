import './App.css'
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/navbar/navbar.jsx'
import Inicio from './components/inicio/inicio.jsx'
import AreasDePractica from './components/areasPracticas/areasPracticas.jsx'
import SobreNosotros from './components/sobreNosotros/sobreNosotros.jsx'
import DañosYPerjuicios from './components/dañosPerjuicios/dañosPerjuicios.jsx'
import Contacto from './components/contacto/contacto.jsx'
import Whatsapp from './components/whatsapp/whatsapp.jsx'
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
    <BrowserRouter >
      <NavBar  isMenuVisible={isMenuVisible}
        showMenu={showMenu}
        hideMenu={hideMenu}/>
  
      <Routes>
        <Route path='/pagina-web-pitu/' element={<Inicio/>}></Route>
        <Route path="/pagina-web-pitu/sobreNosotros" element={<SobreNosotros/>}></Route>
        <Route path='/pagina-web-pitu/areasDePractica' element={<AreasDePractica/>}></Route>
        <Route path='/pagina-web-pitu/dañosPerjuicios' element={<DañosYPerjuicios/>}></Route>
        <Route path='/pagina-web-pitu/contacto' element={<Contacto/>}></Route>


      </Routes>
      <Whatsapp/>
      <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
