import type { RouteObject } from "react-router-dom";
import { Home } from "./pages/Home"; // <== O NOME tem que bater 100% com o arquivo
import { About } from "./pages/About";
import { Chat } from "./pages/Chat";
import { AgendarConsulta } from "./pages/AgendarConsulta";
import { Contact } from "./pages/Contact";
import { Resultados } from "./pages/Resultados";
import { Login } from "./pages/Login";

export const routes: RouteObject[] = [
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/chat", element: <Chat/> },
  { path: "/AgendarConsulta", element: <AgendarConsulta /> },
  { path: "/contact", element: <Contact /> },
  { path: "/resultados", element: <Resultados /> },
  { path: "/login", element: <Login /> },
];
