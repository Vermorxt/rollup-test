import { AnyType } from '../../_types/anytype'

export const hasValue = (value: AnyType) => typeof value !== 'undefined' && value !== null
