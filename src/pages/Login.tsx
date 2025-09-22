import { useNavigate } from 'react-router-dom'
import { useForm } from '../hooks/useForm'
import { FormField } from '../components/FormField'

export function Login(){
  const navigate = useNavigate()
  const { errors, register, handleSubmit } = useForm(
    { name: '', birthdate: '', email: '', password: '' },
    {
      name: v => v ? null : 'Informe seu nome',
      birthdate: v => v ? null : 'Informe sua data de nascimento',
      email: v => /.+@.+\..+/.test(v) ? null : 'E-mail inválido',
      password: v => v && v.length >= 6 ? null : 'Mínimo 6 caracteres',
    }
  )

  return (
    <section className="container section max-w-md">
      <h2 className="text-3xl font-bold">Login do Paciente</h2>
      <form className="mt-6 space-y-4" onSubmit={handleSubmit(()=>navigate('/'))}>
        <FormField label="Nome completo" id="name" type="text" {...register('name')} error={errors.name} />
        <FormField label="Data de nascimento" id="birthdate" type="date" {...register('birthdate')} error={errors.birthdate} />
        <FormField label="E-mail" id="email" type="email" {...register('email')} error={errors.email} />
        <FormField label="Senha" id="password" type="password" {...register('password')} error={errors.password} />
        <button className="btn-accent w-full" type="submit">Entrar</button>
      </form>
    </section>
  )
}
