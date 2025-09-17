import { inputBinding, signal } from '@angular/core';
import { ComponentFixtureAutoDetect, TestBed } from '@angular/core/testing';
import { RaceModel } from '../models/race.model';
import { Race } from './race';

describe('Race', () => {
  const raceModel = signal<RaceModel>({
    id: 12,
    name: 'Paris',
    ponies: [
      { id: 1, name: 'Gentle Pie', color: 'YELLOW' },
      { id: 2, name: 'Big Soda', color: 'ORANGE' },
      { id: 3, name: 'Gentle Bottle', color: 'PURPLE' },
      { id: 4, name: 'Superb Whiskey', color: 'GREEN' },
      { id: 5, name: 'Fast Rainbow', color: 'BLUE' }
    ],
    startInstant: '2024-02-18T08:02:00'
  });

  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [{ provide: ComponentFixtureAutoDetect, useValue: true }]
    })
  );

  it('should display a race name and its ponies', async () => {
    const fixture = TestBed.createComponent(Race, {
      bindings: [inputBinding('raceModel', raceModel)]
    });
    await fixture.whenStable();

    // then we should have the name and ponies displayed in the template
    const element = fixture.nativeElement as HTMLElement;
    const raceName = element.querySelector('h2')!;
    expect(raceName).withContext('You need an h2 element for the race name').not.toBeNull();
    expect(raceName.textContent).withContext('The h2 element should contain the race name').toContain('Paris');
    const ponies = element.querySelectorAll('li');
    expect(ponies.length).withContext('You should have one li elements per pony').toBe(5);
    expect(ponies[0].textContent).toContain('Gentle Pie');
    expect(ponies[1].textContent).toContain('Big Soda');
    expect(ponies[2].textContent).toContain('Gentle Bottle');
    expect(ponies[3].textContent).toContain('Superb Whiskey');
    expect(ponies[4].textContent).toContain('Fast Rainbow');
  });
});
