import { useState } from "react";
import "./Agendar.css";

type Procedimento = string;
type Agendamento = {
  nome: string;
  idade: string;
  telefone: string;
  tipo: "Consulta" | "Exame" | "Telemedicina";
  procedimento: Procedimento;
  data: string;
  hora: string;
  unidade: string;
};

const consultas: Procedimento[] = [
  "Fisioterapia",
  "Terapia Ocupacional",
  "Fonoaudiologia",
  "Psicologia",
];

const exames: Procedimento[] = [
  "Nutrição",
  "Odontologia",
  "Condicionamento Físico",
  "Hidroterapia",
  "Oficinas Terapêuticas",
  "Habilitação e Reabilitação Profissional",
];

export function Agendar() {
  const [etapa, setEtapa] = useState<"menu" | "consulta" | "exame" | "telemedicina" | "meus">("menu");
  const [form, setForm] = useState<Agendamento>({
    nome: "",
    idade: "",
    telefone: "",
    tipo: "Consulta",
    procedimento: "",
    data: "",
    hora: "",
    unidade: "",
  });
  const [agendamentos, setAgendamentos] = useState<Agendamento[]>([]);
  const [confirmado, setConfirmado] = useState("");
  const [horaMsg, setHoraMsg] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));

    // ✅ checar se é o campo de hora e se está disponível
    if (name === "hora") {
      if (isHorarioDisponivel(value)) {
        setHoraMsg("✅ Horário disponível");
      } else {
        setHoraMsg("❌ Horário não disponível");
      }
    }
  };

  // Checa se o horário digitado está entre 07:00 e 18:00
  function isHorarioDisponivel(hora: string) {
    const [h, m] = hora.split(":").map(Number);
    if (!h || h < 7 || h > 18) return false;
    if (h === 18 && m > 0) return false;
    return true;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.nome || !form.idade || !form.telefone || !form.procedimento || !form.data || !form.hora) return;

    if (!isHorarioDisponivel(form.hora)) {
      setHoraMsg("❌ Horário não disponível");
      return;
    }

    const unidade = Math.random() > 0.5
      ? "Rua Domingo de Soto 100 (Jardim Vila Mariana), São Paulo, SP"
      : "Rua Guaicurus 1274, São Paulo, SP, 05756-360";

    const novo = { ...form, unidade };
    setAgendamentos((prev) => [...prev, novo]);
    setConfirmado(`✅ ${form.tipo} agendada com sucesso!`);
    setForm({ ...form, procedimento: "", data: "", hora: "" });
    setEtapa("meus");
  };

  const blocoAgendamento = (tipo: "Consulta" | "Exame" | "Telemedicina", procedimentos: Procedimento[]) => (
    <form className="agendar-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <input name="nome" value={form.nome} onChange={handleChange} placeholder="Nome do paciente *" required />
        <input name="idade" value={form.idade} onChange={handleChange} placeholder="Idade *" required />
        <input name="telefone" value={form.telefone} onChange={handleChange} placeholder="Telefone *" required />
      </div>

      <h3>Escolha o procedimento:</h3>
      <div className="opcoes-grid">
        {procedimentos.map((p) => (
          <button
            key={p}
            type="button"
            className={form.procedimento === p ? "opcao selecionada" : "opcao"}
            onClick={() => setForm({ ...form, tipo, procedimento: p })}
          >
            {p}
          </button>
        ))}
      </div>

      <h3>Escolha a data e horário:</h3>
      <div className="form-row">
        <input type="date" name="data" value={form.data} onChange={handleChange} required />
        <input
          type="time"
          name="hora"
          value={form.hora}
          onChange={handleChange}
          required
          className={horaMsg?.includes("não") ? "erro-hora" : ""}
        />
      </div>

      {horaMsg && <p className={horaMsg.includes("não") ? "hora-erro" : "hora-ok"}>{horaMsg}</p>}
      {confirmado && <p className="confirmado">{confirmado}</p>}
      <button type="submit" className="confirmar">Confirmar Agendamento</button>
    </form>
  );

  return (
    <main className="agendar-page">
      <h1>Agendar</h1>

      {etapa === "menu" && (
        <div className="menu-botoes">
          <button onClick={() => setEtapa("consulta")}>Agendar Consulta</button>
          <button onClick={() => setEtapa("exame")}>Agendar Exame</button>
          <button onClick={() => setEtapa("telemedicina")}>Telemedicina</button>
          <button onClick={() => setEtapa("meus")}>Meus Agendamentos</button>
        </div>
      )}

      {etapa === "consulta" && blocoAgendamento("Consulta", consultas)}
      {etapa === "exame" && blocoAgendamento("Exame", exames)}
      {etapa === "telemedicina" && blocoAgendamento("Telemedicina", [...consultas, ...exames])}

      {etapa === "meus" && (
        <div className="meus-agendamentos">
          {agendamentos.length === 0 ? (
            <p>Você ainda não possui nenhum agendamento conosco.</p>
          ) : (
            <div className="agendamentos-grid">
              {agendamentos.map((a, i) => (
                <div key={i} className="agendamento-card">
                  <h3>{a.tipo}: {a.procedimento}</h3>
                  <p><strong>Paciente:</strong> {a.nome} ({a.idade} anos)</p>
                  <p><strong>Telefone:</strong> {a.telefone}</p>
                  <p><strong>Data:</strong> {a.data}</p>
                  <p><strong>Horário:</strong> {a.hora}</p>
                  <p><strong>Local:</strong> {a.unidade}</p>
                </div>
              ))}
            </div>
          )}
          <button
           className="btn-voltar-home"
           onClick={() => setEtapa("menu")}
            >
           Voltar para o Menu Principal
          </button>
        </div>
      )}
      
    </main>
  );
}
