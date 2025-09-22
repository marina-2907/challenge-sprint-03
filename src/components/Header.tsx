import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="bg-gradient-to-r from-orange-500 to-blue-600 text-white shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link to="/" className="text-2xl font-bold">IMREA Telemedicina</Link>
        <nav className="space-x-6">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/about" className="hover:underline">Sobre</Link>
          <Link to="/contact" className="hover:underline">Contato</Link>
        </nav>
      </div>
    </header>
  );
}
