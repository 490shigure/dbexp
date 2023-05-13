import { dept, type Idept } from './Department'

export interface Imanage {
  dept: Idept
}

export const manage: Imanage = {
  dept: dept
}
