export interface IData {
  timestamp: string;
  hook: Hook;
  payload: Payload;
  user: User;
}

export interface Hook {
  id: string;
  event: Event;
  sequenceId: number;
}

export interface Payload {
  catalogId: string;
  recordId: string;
  values: Values;
  prevValues: PrevValues;
}

export type Values = any

export interface N5 {
  id: string;
  title: string;
}

export interface N9 {
  contact: string;
  comment: string;
}

export interface PrevValues {}

export interface User {
  id: string;
}
export interface IComment {
  value: string;
}

export type IStorageRecords = IStorageRecord[];

export interface IStorageRecord {
  id: string;
  catalogId: string;
  title: string;
  values: IValues;
}

export interface IValues {
  "2"?: string;
  "3"?: I3[];
  "4"?: string;
  "15"?: I15;
}

export interface I3 {
  sectionId?: string;
  catalogId?: string;
  catalogTitle?: string;
  catalogIcon?: string;
  recordId?: string;
  recordTitle?: string;
  isRemoved?: boolean;
}
export type I15 = Root15[];

export interface Root15 {
  catalogId: string;
  recordId: string;
}

export type Event =
  | "record.created"
  | "record.updated"
  | "record.updated"
  | "record.deleted"
  | "record.before.created"
  | "record.before.updated"
  | "record.before.deleted"
  | "record.updating";
