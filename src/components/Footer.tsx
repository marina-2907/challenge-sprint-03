export function Footer() {
  return (
    <footer className="bg-blue-800 text-white py-6 mt-16">
      <div className="container mx-auto text-center">
        &copy; {new Date().getFullYear()} IMREA – Todos os direitos reservados.
      </div>
    </footer>
  );
}
