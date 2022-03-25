import * as yup from 'yup'

export const signInSchema = yup.object({
  email: yup
    .string()
    .email('E-mail inválido')
    .required('Informe seu e-mail completo'),
  password: yup.string().required('Informe sua senha')
})

export interface ISignInProps {
  email: string
  password: string
}
