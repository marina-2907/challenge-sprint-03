import { useState, useEffect } from 'react'
import { Modal } from '../components/Modal'
import { FaArrowLeft, FaArrowRight, FaUniversalAccess } from 'react-icons/fa'

export function Home() {
  const [open, setOpen] = useState<null | 'agendar' | 'chat' | 'resultados'>(null)
  const slides = [
    'public/videos/video 1.mp4',
  ]
  const [current, setCurrent] = useState(0)

  // troca automática de imagem
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
    }, 6000)
    return () => clearInterval(timer)
  }, [slides.length])

  const prevSlide = () => setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  const nextSlide = () => setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1))

  // 👉 injeta o widget de acessibilidade acsbapp
  useEffect(() => {
    const s = document.createElement('script')
    s.src = 'https://acsbapp.com/apps/app/dist/js/app.js'
    s.async = true
    s.onload = () => {
      
    }
    document.body.appendChild(s)

    // remove o script ao desmontar (boa prática)
    return () => {
      document.body.removeChild(s)
    }
  }, [])

  return (
    <main className="Hero">
      {/* ===== Hero com carrossel ===== */}
      <section className="hero-carousel">
        <div
          className="hero-bg"
          style={{ backgroundImage: `url(${slides[current]})` }}
        ></div>

        <div className="hero-content">
          <h1>Telemedicina IMREA HC</h1>
          <p>
            Atendimento online humanizado e seguro – agende consultas,
            acesse resultados e fale com nossos profissionais.
          </p>
          <button className="btn-hero">Clique aqui e saiba mais!</button>
        </div>

        <button className="hero-arrow left" onClick={prevSlide}><FaArrowLeft /></button>
        <button className="hero-arrow right" onClick={nextSlide}><FaArrowRight /></button>

        {/* Botão de acessibilidade fixo (ícone visual) */}
        <button className="accessibility-btn" aria-label="Abrir opções de acessibilidade">
          <FaUniversalAccess size={28} />
        </button>
      </section>

      {/* ===== Cards de serviços ===== */}
      <section className="grid md:grid-cols-3 gap-6 services-list">
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

      {/* ===== Modais ===== */}
      <Modal title="Agendar Consulta" isOpen={open === 'agendar'} onClose={() => setOpen(null)}>
        <p className="text-gray-600 mb-4">Preencha seus dados. (Validação por Hook + Typescript)</p>
        <a className="text-accent underline" href="/contact">Ir para Contato</a>
      </Modal>

      <Modal title="Nosso Chat" isOpen={open === 'chat'} onClose={() => setOpen(null)}>
        <p className="text-gray-600">Acesse nosso canal oficial.</p>
        <a className="text-accent underline" href="#" rel="noreferrer">Abrir chat</a>
      </Modal>

      <Modal title="Resultados" isOpen={open === 'resultados'} onClose={() => setOpen(null)}>
        <p className="text-gray-600 mb-4">Acesse o portal de resultados.</p>
        <a className="text-accent underline" href="/results">Abrir Resultados</a>
      </Modal>


{/* ===== Seção Alunos ===== */}
      <section className="students-section">
        <h2>Nosso Time de Alunos</h2>
        <div className="students-grid">
          {[
            { name: 'Bruno Vinicius Barbosa', role: '566366 / 1TDSPY', img: '/imgs/aluno1.jpeg' },
            { name: 'João Pedro Bitencourt Goldoni', role: '564339 / 1TDSPX', img: '/imgs/aluno2.jpg' },
            { name: 'Marina Tamagnini Magalhães', role: '561786 / 1TDSPX', img: '/imgs/aluno3.jpg' },
          ].map((aluno) => (
            <div key={aluno.name} className="student-card">
              <img src={aluno.img} alt={aluno.name} />
              <h3>{aluno.name}</h3>
              <p>{aluno.role}</p>
            </div>
          ))}
        </div>
      </section>

    </main>
  )
}
