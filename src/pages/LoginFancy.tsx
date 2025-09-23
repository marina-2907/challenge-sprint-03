import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginFancy.css";

export function LoginFancy() {
  const navigate = useNavigate();
  const [showPwd, setShowPwd] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    remember: true,
  });
  const [errors, setErrors] = useState<{[k:string]: string}>({});

  function validate() {
    const e: typeof errors = {};
    if (!form.name.trim()) e.name = "Informe seu nome";
    if (!/.+@.+\..+/.test(form.email)) e.email = "E-mail inválido";
    if (form.password.length < 6) e.password = "Mínimo 6 caracteres";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    // guarda o nome p/ dar "Olá, Fulano!" na Home
    localStorage.setItem("pacienteNome", form.name);
    navigate("/");
  }

  return (
    <main className="loginf-wrap">
      {/* fundo animado */}
      <div className="loginf-bg" aria-hidden />

      <section className="loginf-card">
        {/* Lado esquerdo: destaque */}
        <aside className="loginf-hero">
          <div className="logo-badge">
            <img src="/imgs/NOVO-LOGO-HC-2022.png" alt="IMREA" />
          </div>
          <h1>
            Acesse sua conta
            <span>Telemedicina IMREA + HC</span>
          </h1>
          <p>
            Resultados, consultas e teleatendimento em um só lugar.
            Experiência segura e humanizada.
          </p>

          <ul className="perks">
            <li>✔️ Resultados e laudos</li>
            <li>✔️ Agendamentos rápidos</li>
            <li>✔️ Telemedicina</li>
          </ul>

          <div className="mockup">
            <img src="/imgs/app-preview.png" alt="Prévia do app" />
          </div>
        </aside>

        {/* Lado direito: formulário */}
        <form className="loginf-form" onSubmit={submit} noValidate>
          <h2>Bem-vindo(a) 👋</h2>
          <p className="muted">Entre para continuar</p>

          <label className={errors.name ? "field error" : "field"}>
            <span>Nome completo</span>
            <input
              type="text"
              placeholder="Seu nome"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            {errors.name && <small>{errors.name}</small>}
          </label>

          <label className={errors.email ? "field error" : "field"}>
            <span>E-mail</span>
            <input
              type="email"
              placeholder="voce@exemplo.com"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
            {errors.email && <small>{errors.email}</small>}
          </label>

          <label className={errors.password ? "field error" : "field"}>
            <span>Senha</span>
            <div className="pwd-wrap">
              <input
                type={showPwd ? "text" : "password"}
                placeholder="••••••••"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
              />
              <button
                type="button"
                className="toggle"
                onClick={() => setShowPwd((s) => !s)}
                aria-label={showPwd ? "Ocultar senha" : "Mostrar senha"}
              >
                {showPwd ? "🙈" : "👁️"}
              </button>
            </div>
            {errors.password && <small>{errors.password}</small>}
          </label>

          <div className="row">
            <label className="chk">
              <input
                type="checkbox"
                checked={form.remember}
                onChange={(e) => setForm({ ...form, remember: e.target.checked })}
              />
              <span>Lembrar-me</span>
            </label>
            <a className="link" href="#esqueci">Esqueci a senha</a>
          </div>

          <button className="primary" type="submit">
            Entrar
          </button>

          <div className="divider"><span>ou</span></div>

          <div className="socials">
            <button type="button" className="social google">
              <img src="/imgs/google.svg" alt="" /> Entrar com Google
            </button>
            <button type="button" className="social apple">
              <img src="/imgs/apple.svg" alt="" /> Entrar com Apple
            </button>
          </div>

          <p className="signup">
            Não tem conta? <a className="link" href="#criar">Criar conta</a>
          </p>
        </form>
      </section>
    </main>
  );
}
