import { useForm } from '../hooks/useForm'
import { FormField } from '../components/FormField'

export function Contact(){
  const { errors, register, handleSubmit } = useForm(
    { name: '', email: '', phone: '', date: '' },
    {
      name: v => v ? null : 'Nome é obrigatório',
      email: v => /.+@.+\..+/.test(v) ? null : 'E-mail inválido',
      phone: v => v && v.replace(/\D/g,'').length >= 10 ? null : 'Telefone inválido',
      date: v => v ? null : 'Selecione uma data',
    }
  )
  return (
    <section className="container section max-w-lg">
      <h2 className="text-3xl font-bold">Agendar Consulta</h2>
      <form className="mt-6 space-y-4" onSubmit={handleSubmit(()=>alert('Consulta agendada!'))} noValidate>
        <FormField label="Nome completo" type="text" id="name" {...register('name')} error={errors.name} />
        <FormField label="E-mail" type="email" id="email" {...register('email')} error={errors.email} />
        <FormField label="Telefone" type="tel" id="phone" placeholder="(11) 91234-5678" {...register('phone')} error={errors.phone} />
        <FormField label="Data da consulta" type="date" id="date" {...register('date')} error={errors.date} />
        <button className="btn-primary w-full" type="submit">Enviar</button>
      </form>
    </section>
  )
}
