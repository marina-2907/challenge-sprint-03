import { useParams, useNavigate } from 'react-router-dom'

export function Member(){
  const { rm } = useParams()
  const navigate = useNavigate()
  return (
    <section className="container section max-w-3xl">
      <button onClick={()=>navigate(-1)} className="mb-6 border px-3 py-2 rounded-xl">Voltar</button>
      <h2 className="text-2xl font-bold">Perfil do Integrante</h2>
      <p className="mt-2 text-gray-700">RM: <strong>{rm}</strong></p>
      <p className="mt-2 text-gray-700">Preencha com mais dados (nome, turma, links, responsabilidades).</p>
    </section>
  )
}
