import { Component, input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { RaceModel } from '../models/race.model';
import { Pony } from '../pony/pony';

@Component({
  selector: 'pr-race',
  imports: [Pony, DatePipe],
  templateUrl: './race.html',
  styleUrl: './race.css'
})
export class Race {
  readonly raceModel = input.required<RaceModel>();
}
