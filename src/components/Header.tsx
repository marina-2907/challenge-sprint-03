import { Link, NavLink, useNavigate } from 'react-router-dom'




export function Header(){
  const navigate = useNavigate()
  const nav = (to: string, label: string) => (
    <NavLink
      to={to}
      className={({isActive}) =>
        `px-3 py-2 rounded-xl hover:bg-blue-50 ${isActive ? 'text-accent font-semibold' : 'text-gray-700'}`
      }>
      {label}
    </NavLink>
  )

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b">
      <div className="container py-3 flex items-center gap-4">
        <Link to="/" className="text-xl font-bold text-brand">IMREA Telemedicina</Link>
        <nav className="ml-auto flex items-center gap-2">
          {nav('/','Home')}
          {nav('/about','Sobre')}
          {nav('/team','Integrantes')}
          {nav('/faq','FAQ')}
          {nav('/contact','Contato')}
          <button onClick={()=>navigate('/results')} className="btn-accent ml-2">Resultados</button>
          <NavLink to="/login" className="px-3 py-2 rounded-xl hover:bg-blue-50">Login</NavLink>
        </nav>
      </div>
    </header>
  )
}
