import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';

import { Note } from '../interfaces/notes';
import * as NoteActions from '../actions/note.actions';
import { AppState, getAllNotes, getNoteById } from '../reducers';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  public notes: Observable<Note[]>;

  constructor(private storage: Storage, private store: Store<AppState>) {
    this.notes = this.store.select(getAllNotes);
  }

  getNote(id: string): Observable<Note> {
    return this.store.select(getNoteById, {
      id: id
    });
  }

  createNote(title): void {
    let id = Math.random()
      .toString(36)
      .substring(7);

    let note = {
      id: id.toString(),
      title: title, 
      content: ''
    };

    this.store.dispatch(new NoteActions.CreateNote({ note: note }));
  }

  deleteNote(note): void {
    this.store.dispatch(new NoteActions.DeleteNote({ note: note }));
  }
}
