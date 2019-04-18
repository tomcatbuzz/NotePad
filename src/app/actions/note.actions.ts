import { Action } from '@ngrx/store';
import { Note } from '../interfaces/notes';

export enum ActionTypes {
  CreateNote = '[Notes Service] Create Note',
  DeleteNote = '[Notes Service] Delete Note'
}

export class CreateNote implements Action {
  readonly type = ActionTypes.CreateNote;

  constructor(public payload: { note: Note }) {}
}

export class DeleteNote implements Action {
  readonly type = ActionTypes.DeleteNote;

  constructor(public payload: { note: Note }) {}
}

export type ActionsUnion = CreateNote | DeleteNote;
