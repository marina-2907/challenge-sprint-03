import "./Contato.css";

export function Contato() {
  return (
    <main className="contato-page">
      <section className="contato-container">
        <h1 className="contato-title">Entre em Contato</h1>
        <p className="contato-subtitle">
          Estamos disponíveis para esclarecer dúvidas, receber sugestões e ajudar no que for necessário.
        </p>

        <div className="contato-grid">
          <div className="contato-card">
            <h2>📞 Telefone</h2>
            <p>(11) 5180-7800</p>
          </div>

          <div className="contato-card">
            <h2>📍 Endereço</h2>
            <p>Rua Domingo de Soto, 100 - Vila Mariana, São Paulo</p>
          </div>
          
         <div className="contato-card">
            <h2>🌐 Site Oficial</h2>
            <a
              href="https://redelucymontoro.org.br/site/"
              target="_blank"
              rel="noreferrer"
            >
              imrea.org.br
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
