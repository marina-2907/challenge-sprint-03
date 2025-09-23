import './Resultados.css'; 
import { useNavigate } from 'react-router-dom'; 

export function Resultados(){
  const navigate = useNavigate(); 

  const click = (type: string) => {
    if (type === 'receitas') {
      alert('Baixar receita: receita-medica.txt');
    } else if (type === 'voltar') {
      navigate('/'); 
    } else {
      alert(`Sem resultados de ${type} por enquanto.`);
    }
  };

  const item = (img: string, label: string, key: string) => (
    <button onClick={() => click(key)} className="card">
      <img src={img} alt={label}/>
      <span>{label}</span>
    </button>
  );

  return (
    <section className="container section">
      <h1>Resultados do Paciente</h1>
      <div className="grid">
        {item('imgs/exame.jpg','Exames','exames')}
        {item('imgs/laudo.jpg','Laudos','laudos')}
        {item('imgs/receita.avif','Receitas','receitas')}
        {item('imgs/voltar.png','Voltar','voltar')}
      </div>
    </section>
  );
}
