export interface IData {
    timestamp: string
    hook: Hook
    payload: Payload
    user: User
  }
  
  export interface Hook {
    id: string
    event: string
    sequenceId: number
  }
  
  export interface Payload {
    catalogId: string
    recordId: string
    values: Values
    prevValues: PrevValues
  }
  
  export interface Values {
    "2": string
    "3": any
    "4": string[]
    "5": N5[]
    "6": string
    "9": N9[]
  }
  
  export interface N5 {
    id: string
    title: string
  }
  
  export interface N9 {
    contact: string
    comment: string
  }
  
  export interface PrevValues {}
  
  export interface User {
    id: string
  }
  export interface IComment {
    value: string;
  }