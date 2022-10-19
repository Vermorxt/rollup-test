import { AnyType } from '../../_types/anytype'

export const cloneNestedObject = (nestedObject: AnyType = {}) =>
  JSON.parse(JSON.stringify(nestedObject)) as unknown as AnyType
