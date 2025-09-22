export function Resultados(){
  const click = (type: string) => {
    if(type === 'receitas'){ alert('Baixar receita: receita-medica.txt') }
    else { alert(`Sem resultados de ${type} por enquanto.`) }
  }

  const item = (img: string, label: string, key: string) => (
    <button onClick={()=>click(key)} className="card hover:shadow-lg flex flex-col items-center">
      <img src={img} alt={label} className="h-28 w-28 object-cover rounded-xl"/>
      <span className="mt-2 font-medium">{label}</span>
    </button>
  )

  return (
    <section className="container section">
      <h1 className="text-3xl font-bold">Resultados do Paciente</h1>
      <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
        {item('/exame.jpg','Exames','exames')}
        {item('/laudo.jpg','Laudos','laudos')}
        {item('/receita.avif','Receitas','receitas')}
        {item('/voltar.png','Voltar','voltar')}
      </div>
    </section>
  )
}
