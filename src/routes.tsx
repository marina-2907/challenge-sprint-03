import { Home } from './pages/Home';
import { AgendarConsulta } from './pages/AgendarConsulta';
import { Chat } from './pages/Chat';
import { Resultados } from './pages/Resultados';
import { Contato } from './pages/Contato'
import { Login } from './pages/Login';
import { Buscar } from './pages/Buscar'

export const routes = [
  { path: '/', element: <Home /> },
  { path: '/agendar-consulta', element: <AgendarConsulta /> },
  { path: '/chat', element: <Chat /> },
  { path: '/resultados', element: <Resultados /> },
  { path: '/contato', element: <Contato /> },
  { path: '/Login', element: <Login /> },
  { path: '/buscar', element: <Buscar /> },
];