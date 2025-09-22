import { useEffect, useState } from 'react'
type Rules<T> = Partial<Record<keyof T, (value: any) => string | null>>

export function useForm<T extends Record<string, any>>(initial: T, rules: Rules<T>){
  const [values, setValues] = useState<T>(initial)
  const [errors, setErrors] = useState<Partial<Record<keyof T, string>>>({})
  const [submitted, setSubmitted] = useState(false)

  useEffect(()=>{
    if(!submitted) return
    const e: Partial<Record<keyof T, string>> = {}
    for(const key in rules){
      const fn = rules[key]
      if(fn){
        const msg = fn(values[key])
        if(msg) e[key as keyof T] = msg
      }
    }
    setErrors(e)
  }, [values, rules, submitted])

  function register<K extends keyof T>(name: K){
    return {
      name: name as string,
      value: values[name],
      onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        setValues(v => ({...v, [name]: e.target.value}))
    }
  }

  function handleSubmit(cb: (vals: T) => void){
    return (e: React.FormEvent) =>{
      e.preventDefault()
      setSubmitted(true)
      const e2: Partial<Record<keyof T, string>> = {}
      for(const key in rules){
        const fn = rules[key]
        if(fn){
          const msg = fn(values[key])
          if(msg) e2[key as keyof T] = msg
        }
      }
      setErrors(e2)
      if(Object.keys(e2).length === 0){ cb(values) }
    }
  }

  return { values, errors, setValues, register, handleSubmit }
}
