import { Component, signal } from '@angular/core';
import { RaceModel } from '../models/race.model';

@Component({
  selector: 'pr-races',
  imports: [],
  templateUrl: './races.html',
  styleUrl: './races.css'
})
export class Races {
  readonly races = signal<Array<RaceModel>>([
    { id: 1, name: 'Lyon' },
    { id: 2, name: 'London' }
  ]);
}
