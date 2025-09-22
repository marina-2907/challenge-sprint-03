import { Link } from 'react-router-dom'
import type { Member } from '../types'

const members: Member[] = [
  { name: 'Bruno Vinicius Barbosa', rm: '566366', turma: '1TDSPY', photo: '/aluno1.jpeg' },
  { name: 'João Pedro Bitencourt Goldoni', rm: '564339', turma: '1TDSPX', photo: '/aluno2.jpg' },
  { name: 'Marina Tamagnini Magalhães', rm: '561786', turma: '1TDSPX', photo: '/aluno3.jpg' },
]

export function Team(){
  return (
    <section className="container section">
      <h2 className="text-3xl font-bold">Integrantes</h2>
      <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {members.map(m => (
          <Link key={m.rm} to={`/team/${m.rm}`} className="card hover:shadow-lg">
            <img src={m.photo} alt={m.name} className="h-40 w-full object-cover rounded-xl"/>
            <h3 className="mt-3 font-semibold">{m.name}</h3>
            <p className="text-sm text-gray-600">{m.rm} / {m.turma}</p>
          </Link>
        ))}
      </div>
    </section>
  )
}
