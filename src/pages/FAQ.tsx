export function FAQ(){
  const faqs = [
    { q: 'Como agendar consulta?', a: 'Use o botão Agendar na Home.' },
    { q: 'Onde vejo meus resultados?', a: 'Acesse a página Resultados.' },
    { q: 'O site é acessível?', a: 'Sim, seguimos boas práticas.' },
  ]
  return (
    <section className="container section max-w-3xl">
      <h2 className="text-3xl font-bold">Perguntas Frequentes</h2>
      <div className="mt-6 space-y-4">
        {faqs.map(item => (
          <details key={item.q} className="card">
            <summary className="cursor-pointer font-medium">{item.q}</summary>
            <p className="mt-2 text-gray-700">{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  )
}
