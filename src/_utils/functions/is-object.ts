import { AnyType } from '../../_types/anytype'

export const isObject = (element: AnyType) => (typeof element === 'object' && !Array.isArray(element)) || null
