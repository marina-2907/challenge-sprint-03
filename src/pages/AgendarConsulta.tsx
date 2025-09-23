import { useState } from 'react'

export function AgendarConsulta() {
  const [form, setForm] = useState({
    nome: '',
    email: '',
    telefone: '',
    data: '',
    hora: '',
    motivo: '',
  })

  const [mensagem, setMensagem] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!form.nome || !form.email || !form.telefone || !form.data || !form.hora) {
      setMensagem('⚠️ Preencha todos os campos obrigatórios.')
      return
    }

    setMensagem('✅ Consulta agendada com sucesso! Entraremos em contato por e-mail.')
    setForm({ nome: '', email: '', telefone: '', data: '', hora: '', motivo: '' })
  }

  return (
    <main className="agenda-page">
      <section className="agenda-container">
        <h1>📅 Agendar Consulta</h1>
        <p>Preencha os dados abaixo e agende sua consulta com facilidade e segurança.</p>

        <form onSubmit={handleSubmit} className="agenda-form">
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="nome">Nome completo *</label>
              <input
                type="text"
                id="nome"
                name="nome"
                value={form.nome}
                onChange={handleChange}
                placeholder="Digite seu nome completo"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">E-mail *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="exemplo@email.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="telefone">Telefone *</label>
              <input
                type="tel"
                id="telefone"
                name="telefone"
                value={form.telefone}
                onChange={handleChange}
                placeholder="(11) 99999-9999"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="data">Data *</label>
              <input
                type="date"
                id="data"
                name="data"
                value={form.data}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="hora">Horário *</label>
              <input
                type="time"
                id="hora"
                name="hora"
                value={form.hora}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-group full-width">
            <label htmlFor="motivo">Motivo da consulta</label>
            <textarea
              id="motivo"
              name="motivo"
              value={form.motivo}
              onChange={handleChange}
              placeholder="Descreva brevemente o motivo da consulta (opcional)"
              rows={4}
            />
          </div>

          {mensagem && <p className="mensagem">{mensagem}</p>}

          <button type="submit" className="agenda-btn">Agendar Consulta</button>
        </form>
      </section>
    </main>
  )
}
