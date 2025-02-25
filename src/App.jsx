import './App.css'
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/navbar/navbar.jsx'
import Inicio from './components/inicio/inicio.jsx'
import AreasDePractica from './components/areasPracticas/areasPracticas.jsx'
import SobreNosotros from './components/sobreNosotros/sobreNosotros.jsx'
import DañosYPerjuicios from './components/dañosPerjuicios/dañosPerjuicios.jsx'
import Sucesiones from './components/areasPracticas/especializaciones/sucesiones.jsx'
import DerechoCivil from './components/areasPracticas/especializaciones/derechoCivil.jsx'
import Contacto from './components/contacto/contacto.jsx'
import Whatsapp from './components/whatsapp/whatsapp.jsx'
import RealEstate from './components/areasPracticas/especializaciones/realEstate.jsx'
import RegularizacionDePropiedades from './components/areasPracticas/especializaciones/regularizacionProp.jsx'
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
        <Route path='/' element={<Inicio/>}></Route>
        <Route path="/sobreNosotros" element={<SobreNosotros/>}></Route>
        <Route path='/areasDePractica' element={<AreasDePractica/>}></Route>
        <Route path='/dañosPerjuicios' element={<DañosYPerjuicios/>}></Route>
        <Route path='/contacto' element={<Contacto/>}></Route>

        <Route path='/pagina-web-pitu/sucesiones' element={<Sucesiones/>}></Route>
        <Route path='/pagina-web-pitu/derecho-civil' element={<DerechoCivil/>}></Route>
        <Route path='/pagina-web-pitu/real-estate' element={<RealEstate/>}></Route>
        <Route path='/pagina-web-pitu/regularizacion-de-propiedades' element={<RegularizacionDePropiedades/>}></Route>
        {/* <Route path='/pagina-web-pitu/divisiones-de-condominio' element={<DivisionesDeCondominio/>}></Route>
        <Route path='/pagina-web-pitu/subdivisiones-lotes-y-mensuras' element={<SubdivisionesLotesMensuras/>}></Route>
        <Route path='/pagina-web-pitu/acciones-reivindicatorias' element={<AccionesReivindicatorias/>}></Route>
        <Route path='/pagina-web-pitu/desalojos-civiles' element={<DesalojosCiviles/>}></Route>
        <Route path='/pagina-web-pitu/acciones-posesorias-e-interdictos' element={<AccionesPosesoriasInterdictos/>}></Route>
        <Route path='/pagina-web-pitu/regularizacion-de-dominio-y-titulos-de-propiedad' element={<RegularizacionDominioTitulosPropiedad/>}></Route> */}

      </Routes>
      <Whatsapp/>
      <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
