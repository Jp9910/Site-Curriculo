import {BrowserRouter, Routes, Route} from 'react-router'
import NotFound from './pages/NotFound'
import Rodape from './components/Rodape'
import ContainerCaixa from './components/ContainerCaixa'
import NavBar from './components/Navbar'
import AboutMeEnglish from './pages/AboutMe'
import Resume from './pages/Resume'
import Portfolio from './pages/Portfolio'

// https://github.com/alura-cursos/aluroni-router/blob/main/src/routes.tsx
function Roteador() {
    return (
        <BrowserRouter>
            <ContainerCaixa>
                <NavBar />
                <Routes>
                        <Route path="/" element={<AboutMeEnglish />}/>
                        <Route path="*" element={<NotFound />}/>
                        <Route path="/resume" element={<Resume />}/>
                        <Route path="/portfolio" element={<Portfolio />}/>
                </Routes>
                <Rodape />
            </ContainerCaixa>
        </BrowserRouter>
    )
}

export default Roteador