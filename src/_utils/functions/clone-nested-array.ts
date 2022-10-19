import { AnyType } from '../../_types/anytype'

export const cloneNestedArray = (nestedArray: AnyType[] = []) =>
  JSON.parse(JSON.stringify(nestedArray)) as unknown as AnyType
