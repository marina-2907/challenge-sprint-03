export function Contato() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-100 to-white py-16 px-4">
      <section className="max-w-5xl w-full text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
          Entre em Contato
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-12">
          Estamos disponíveis para esclarecer dúvidas, receber sugestões e ajudar no que for necessário.
        </p>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-1 transition duration-300">
            <h2 className="text-xl font-semibold text-blue-900 mb-3">📞 Telefone</h2>
            <p className="text-gray-700 text-lg">(11) 5180-7800</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-1 transition duration-300">
            <h2 className="text-xl font-semibold text-blue-900 mb-3">📍 Endereço</h2>
            <p className="text-gray-700 text-lg">
              Rua Domingo de Soto, 100 - Vila Mariana, São Paulo
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-1 transition duration-300">
            <h2 className="text-xl font-semibold text-blue-900 mb-3">🌐 Site Oficial</h2>
            <a
              href="https://redelucymontoro.org.br/site/"
              target="_blank"
              rel="noreferrer"
              className="text-gray-700 text-lg hover:text-blue-600 hover:underline"
            >
              imrea.org.br
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
