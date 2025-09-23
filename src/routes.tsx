import type { RouteObject } from "react-router-dom";
import { Home } from "./pages/Home";
import { Chat } from "./pages/Chat";
import { Resultados } from "./pages/Resultados";
import { Login } from "./pages/Login";
import { Agendar } from "./pages/Agendar";   // <- nome do arquivo e da função devem existir
import { Contato } from "./pages/Contato";   // <- idem

export const routes: RouteObject[] = [
  { path: "/", element: <Home /> },
  { path: "/chat", element: <Chat /> },
  { path: "/resultados", element: <Resultados /> },
  { path: "/login", element: <Login /> },
  { path: "/agendar", element: <Agendar /> },
  { path: "/contato", element: <Contato /> },
];
