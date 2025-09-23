import { useState } from 'react'
import { Modal } from '../components/Modal'
import { Carousel } from '../components/Carousel'

export function Home(){
  const [open, setOpen] = useState<null | 'agendar' | 'chat' | 'resultados'>(null)

  return (
    <main className="Hero">
      <section className="hero">
  <h1>Telemedicina IMREA HC</h1>
  <p>
    Atendimento online humanizado e seguro – agende consultas,
    acesse resultados e fale com nossos profissionais.
  </p>
</section>

      <section className="pb-12">
        <Carousel slides={[
          { src: 'https://images.unsplash.com/photo-1587351021252-4c1a7ba5c46e?q=80&w=1600&auto=format&fit=crop', alt: 'Atendimento' },
          { src: 'https://images.unsplash.com/photo-1584982751601-97dcc096659c?q=80&w=1600&auto=format&fit=crop', alt: 'Equipe' },
          { src: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=1600&auto=format&fit=crop', alt: 'Infraestrutura' },
        ]}/>
      </section>

      <section className="grid md:grid-cols-3 gap-6" aria-label="Nossos Serviços">
        {[
          { title: 'Agendamento Online', icon: '📅', desc: 'Marque sua consulta com confirmação.' },
          { title: 'Chat com Profissionais', icon: '💬', desc: 'Converse em tempo real para tirar dúvidas.' },
          { title: 'Resultados Online', icon: '📄', desc: 'Acesse exames e laudos com segurança.' },
        ].map(card => (
          <article key={card.title} className="card text-center">
            <div className="text-3xl">{card.icon}</div>
            <h3 className="mt-3 text-xl font-semibold">{card.title}</h3>
            <p className="mt-2 text-gray-600">{card.desc}</p>
          </article>
        ))}
      </section>

      {/* Modais */}
      <Modal title="Agendar Consulta" isOpen={open==='agendar'} onClose={()=>setOpen(null)}>
        <p className="text-gray-600 mb-4">Preencha seus dados. (Validação por Hook + Typescript)</p>
        <a className="text-accent underline" href="/contact">Ir para Contato</a>
      </Modal>

      <Modal title="Nosso Chat" isOpen={open==='chat'} onClose={()=>setOpen(null)}>
        <p className="text-gray-600">Acesse nosso canal oficial.</p>
        <a className="text-accent underline" href="#" rel="noreferrer">Abrir chat</a>
      </Modal>

      <Modal title="Resultados" isOpen={open==='resultados'} onClose={()=>setOpen(null)}>
        <p className="text-gray-600 mb-4">Acesse o portal de resultados.</p>
        <a className="text-accent underline" href="/results">Abrir Resultados</a>
      </Modal>
    </main>
  )
}
