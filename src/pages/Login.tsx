import { useNavigate } from "react-router-dom";
import { useForm } from "../hooks/useForm";
import { FormField } from "../components/FormField";

type LoginForm = {
  name: string;
  birthdate: string;
  email: string;
  password: string;
};

export function Login() {
  const navigate = useNavigate();

  const { errors, register, handleSubmit } = useForm<LoginForm>(
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

  return (
    <main className="flex items-center justify-center min-h-screen bg-gradient-to-b from-brand-50 to-brand-100 px-4">
      <section className="w-full max-w-md rounded-2xl bg-white shadow-xl p-8">
        <h1 className="text-3xl font-bold text-center text-brand-600">
          Acessar Conta
        </h1>
        <p className="mt-2 text-center text-gray-500">
          Faça login para acessar os resultados e agendar consultas.
        </p>

        <form
          onSubmit={handleSubmit(() => navigate("/"))}
          className="mt-8 space-y-5"
          noValidate
        >
          <FormField
            label="Nome completo"
            id="name"
            type="text"
            {...register("name")}
            error={errors.name}
          />
          <FormField
            label="Data de nascimento"
            id="birthdate"
            type="date"
            {...register("birthdate")}
            error={errors.birthdate}
          />
          <FormField
            label="E-mail"
            id="email"
            type="email"
            {...register("email")}
            error={errors.email}
          />
          <FormField
            label="Senha"
            id="password"
            type="password"
            {...register("password")}
            error={errors.password}
          />

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-brand-500 text-white text-lg font-semibold hover:bg-brand-600 transition-colors duration-300 shadow-md"
          >
            Entrar
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600">
          Esqueceu a senha?{" "}
          <a
            href="#"
            className="text-brand-600 hover:text-brand-700 underline"
          >
            Clique aqui
          </a>
        </p>
      </section>
    </main>
  );
}
