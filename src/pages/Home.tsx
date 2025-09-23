import { useState, useEffect } from 'react'
import { Modal } from '../components/Modal'

export function Home() {
  const [open, setOpen] = useState<null | 'agendarConsultas' | 'chat' | 'resultados'>(null)
  const [pacienteNome, setPacienteNome] = useState<string | null>(null) // 👈 novo estado

  const slides = [
    'public/videos/video 1.mp4',
  ]
  const [current, setCurrent] = useState(0)

  // troca automática de vídeo
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev === slides.length - 1 ? 0 : prev + 1))
    }, 6000)
    return () => clearInterval(timer)
  }, [slides.length])

  // injeta o widget de acessibilidade
  useEffect(() => {
    const s = document.createElement('script')
    s.src = 'https://acsbapp.com/apps/app/dist/js/app.js'
    s.async = true
    document.body.appendChild(s)
    return () => {
      document.body.removeChild(s)
    }
  }, [])


  // 👇 recupera o nome do paciente salvo no login
  useEffect(() => {
    const nome = localStorage.getItem('pacienteNome')
    if (nome) setPacienteNome(nome)
  }, [])

  
  return (
    <main className="Hero">
      {/* ===== Hero com vídeo de fundo ===== */}
      <section className="hero-carousel">
        <video
          key={slides[current]}
          className="hero-video"
          src={slides[current]}
          autoPlay
          muted
          loop
          playsInline
        />

        <div className="hero-content">
          {/* 👇 saudação aparece se o paciente tiver feito login */}
          {pacienteNome && <h2 className="bem-vindo">Olá, {pacienteNome}!</h2>}

          <h1>Telemedicina IMREA + HC</h1>
          <p>
            Atendimento online humanizado e seguro – agende consultas,
            acesse resultados e fale com nossos profissionais.
          </p>
          <a href="#sobre-nos" className="btn-hero">Clique aqui e saiba mais!</a>
        </div>
      </section>

      {/* ===== Seção Sobre Nós ===== */}
      <section className="about-section" id="sobre-nos">
        <div className="about-container">
          <div className="about-image">
            <img src="public/imgs/apresentação.jpeg" alt="Equipe desenvolvendo o projeto" />
            <div className="about-thumbs">
              <img src="public/imgs/imrea 2.webp" alt="Equipe em reunião" />
              <img src="public/imgs/paciente 01.webp" alt="Apresentação do projeto" />
            </div>
          </div>

          <div className="about-text">
            <h2>Sobre Nós</h2>
            <p>
              Somos um grupo de estudantes da FIAP apaixonados por tecnologia e inovação.
              Nosso objetivo é criar soluções que tornem a saúde mais acessível,
              inclusiva e humana, unindo experiência do usuário e eficiência técnica.
            </p>
            <p>
              Este projeto de <strong>Telemedicina</strong> nasceu com a missão
              de facilitar agendamentos, consultas e o acesso a resultados
              de exames, garantindo segurança e praticidade para pacientes
              e profissionais de saúde.
            </p>
            <p>
              Acreditamos que <strong>inovação</strong> e <strong>empatia</strong>
              andam juntas para transformar a forma como as pessoas cuidam da saúde.
            </p>
          </div>
        </div>
      </section>

      {/* ===== Seção de Serviços ===== */}
      <section className="services-pro">
        <div className="services-header">
          <h2>Nossos Serviços</h2>
          <p>
            Atendimento de qualidade para você e sua família, com tecnologia e segurança.
          </p>
        </div>

        <div className="services-grid-pro">
          {[
            {
              title: 'Agendamento Online',
              icon: '📅',
              desc: 'Agende consultas e procedimentos em poucos cliques. Confirmação imediata e lembretes automáticos para evitar esquecimentos.',
            },
            {
              title: 'Chat com Profissionais',
              icon: '💬',
              desc: 'Fale com nossa equipe em tempo real para esclarecer dúvidas e receber orientações de forma segura e confidencial.',
            },
            {
              title: 'Resultados Online',
              icon: '📄',
              desc: 'Acesse laudos e exames com login protegido, podendo compartilhar com seu médico ou salvar para acompanhar seu histórico.',
            },
          ].map(card => (
            <article key={card.title} className="service-card-pro">
              <div className="service-icon-pro">{card.icon}</div>
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
              <button className="service-btn-pro">Saiba mais</button>
            </article>
          ))}
        </div>
      </section>

      {/* ===== Modais ===== */}
      <Modal title="Agendar Consulta" isOpen={open === 'agendarConsultas'} onClose={() => setOpen(null)}>
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
      <section className="students-section" aria-label="Equipe de alunos do projeto">
        <h2>Os Alunos</h2>
        <div className="students-grid">
          {[
            {
              name: 'Bruno Vinicius Barbosa',
              rm: '566366 / 1TDSPY',
              img: '/imgs/aluno1.jpeg',
              linkedin: 'https://www.linkedin.com/in/brunovbarbosaa',
              github: 'https://github.com/brunovinicius02',
            },
            {
              name: 'João Pedro Bitencourt Goldoni',
              rm: '564339 / 1TDSPX',
              img: '/imgs/aluno2.jpg',
              linkedin: 'https://www.linkedin.com/in/joaopedrogoldoni',
              github: 'https://github.com/JoaoPedroBitencourtGoldoni',
            },
            {
              name: 'Marina Tamagnini Magalhães',
              rm: '561786 / 1TDSPX',
              img: '/imgs/aluno3.jpg',
              linkedin: 'https://www.linkedin.com/in/marina-t-36b14328b',
              github: 'https://github.com/marina-2907/marina',
            },
          ].map(aluno => (
            <div className="student-card" key={aluno.name}>
              <img src={aluno.img} alt={`Foto de ${aluno.name}`} className="profile-pic" />
              <span className="profile-name">{aluno.name}</span>
              <span className="profile-rm">{aluno.rm}</span>
              <div className="social-links">
                <a href={aluno.linkedin} target="_blank" rel="noreferrer">
                  <img src="https://th.bing.com/th/id/OIP.wXu7EemBf_zTRrcepkjkAQHaHa?cb=iwc2&w=1920&h=1920&rs=1&pid=ImgDetMain" alt="LinkedIn" className="icon" />
                </a>
                <a href={aluno.github} target="_blank" rel="noreferrer">
                  <img src="https://th.bing.com/th/id/R.7a864f07681f187fb572468bfc949977?rik=3fUik6Pc6xTrHQ&pid=ImgRaw&r=0" alt="GitHub" className="icon" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
