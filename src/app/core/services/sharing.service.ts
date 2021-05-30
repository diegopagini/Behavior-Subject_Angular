import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Persona {
  name: string;
}

@Injectable()
export class SharingService {
  private sharingObservablePrivate: BehaviorSubject<Persona> =
    new BehaviorSubject<Persona>({ name: 'Gentleman Programming' });

  get sharingObservable() {
    return this.sharingObservablePrivate.asObservable();
  }

  set sharingObservableData(data: Persona) {
    this.sharingObservablePrivate.next(data);
  }
}
