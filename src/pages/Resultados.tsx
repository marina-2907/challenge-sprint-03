import { useNavigate } from "react-router-dom";

export function Resultados() {
  const navigate = useNavigate();

  const click = (type: string) => {
    if (type === "receitas") {
      alert("Baixar receita: receita-medica.txt");
    } else if (type === "voltar") {
      navigate("/");
    } else {
      alert(`Sem resultados de ${type} por enquanto.`);
    }
  };

  const item = (img: string, label: string, key: string) => (
    <button
      onClick={() => click(key)}
      className="bg-white rounded-2xl p-6 w-full max-w-[200px] text-center shadow-md border-2 border-transparent transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:border-blue-500 hover:shadow-xl"
    >
      <img
        src={img}
        alt={label}
        className="h-32 w-32 object-contain rounded-xl mx-auto mb-4 transition-transform duration-300 hover:scale-110"
      />
      <span className="block text-lg font-semibold text-gray-800 transition-colors duration-300 hover:text-blue-500">
        {label}
      </span>
    </button>
  );

  return (
    <section className="min-h-screen py-28 px-6 bg-gradient-to-br from-gray-50 to-slate-100 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-blue-900 text-center mb-12 tracking-wide">
        Resultados do Paciente
      </h1>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-10 w-full max-w-5xl justify-items-center">
        {item("imgs/exame.jpg", "Exames", "exames")}
        {item("imgs/laudo.jpg", "Laudos", "laudos")}
        {item("imgs/receita.avif", "Receitas", "receitas")}
        {item("imgs/voltar.png", "Voltar", "voltar")}
      </div>
    </section>
  );
}
