import { ValidationOptions } from './validate-options'

export type FormFieldTypes = 'text' | 'password' | 'email' | 'textarea' | 'toggle' | 'radio' | 'checkbox'

export interface InitialFormValues {
  name: string
  value: string | number
  label: string
  type: FormFieldTypes // NOTE: use not InputHTMLAttributes<HTMLInputElement> for now because validation handled by browser otherwise
  validation: ValidationOptions
}
