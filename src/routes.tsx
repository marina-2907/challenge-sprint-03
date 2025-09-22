import { RouteObject } from 'react-router-dom'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Team } from './pages/Team'
import { Member } from './pages/Member'
import { FAQ } from './pages/FAQ'
import { Contact } from './pages/Contact'
import { Resultados } from './pages/Resultados'
import { Login } from './pages/Login'

export const routes: RouteObject[] = [
  { path: '/', element: <Home/> },
  { path: '/about', element: <About/> },
  { path: '/team', element: <Team/> },
  { path: '/team/:rm', element: <Member/> },  
  { path: '/faq', element: <FAQ/> },
  { path: '/contact', element: <Contact/> },
  { path: '/resultados', element: <Resultados/> },
  { path: '/login', element: <Login/> },
]
