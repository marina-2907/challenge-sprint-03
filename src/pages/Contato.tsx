import { useState } from 'react';
import './Contato.css';

export function Contato() {
  const [form, setForm] = useState({ nome: '', email: '', mensagem: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Mensagem enviada!\nNome: ${form.nome}\nE-mail: ${form.email}`);
    setForm({ nome: '', email: '', mensagem: '' });
  };

  return (
    <main className="contato-page">
      <h1>Contato</h1>
      <p>Envie uma mensagem e retornaremos em breve.</p>
      <form onSubmit={handleSubmit}>
        <label>
          Nome:
          <input name="nome" value={form.nome} onChange={handleChange} required />
        </label>
        <label>
          E-mail:
          <input name="email" type="email" value={form.email} onChange={handleChange} required />
        </label>
        <label>
          Mensagem:
          <textarea name="mensagem" value={form.mensagem} onChange={handleChange} rows={5} required />
        </label>
        <button type="submit">Enviar</button>
      </form>
    </main>
  );
}

