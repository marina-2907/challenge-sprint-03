import { useNavigate } from "react-router-dom";
import { useForm } from "../hooks/useForm";
import { FormField } from "../components/FormField";
import "./Login.css";

type LoginForm = {
  name: string;
  birthdate: string;
  email: string;
  password: string;
};

export function Login() {
  const navigate = useNavigate();

  // ⚠️ verifique se o seu hook useForm retorna {values}
  const { errors, register, handleSubmit, values } = useForm<LoginForm>(
    {
      name: "",
      birthdate: "",
      email: "",
      password: "",
    },
    {
      name: (v) => (v ? null : "Informe seu nome"),
      birthdate: (v) => (v ? null : "Informe sua data de nascimento"),
      email: (v) => (/.+@.+\..+/.test(v) ? null : "E-mail inválido"),
      password: (v) => (v.length >= 6 ? null : "Mínimo 6 caracteres"),
    }
  );

  // 👉 Salva o nome e redireciona para a Home
  const onSubmit = () => {
    localStorage.setItem("pacienteNome", values.name); // guarda o nome
    navigate("/"); // vai para a página inicial
  };

  return (
    <main className="login-page">
      <section className="login-card">
        <h1>Acessar Conta</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="login-form">
          <FormField label="Nome completo" id="name" type="text" {...register("name")} error={errors.name} />
          <FormField label="Data de nascimento" id="birthdate" type="date" {...register("birthdate")} error={errors.birthdate} />
          <FormField label="E-mail" id="email" type="email" {...register("email")} error={errors.email} />
          <FormField label="Senha" id="password" type="password" {...register("password")} error={errors.password} />
          <button type="submit" className="login-btn">Entrar</button>
        </form>
      </section>
    </main>
  );
}
