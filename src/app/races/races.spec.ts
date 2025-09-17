import { ComponentFixtureAutoDetect, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Race } from '../race/race';
import { Races } from './races';

describe('Races', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [{ provide: ComponentFixtureAutoDetect, useValue: true }]
    })
  );

  it('should display every race', async () => {
    const fixture = TestBed.createComponent(Races);
    await fixture.whenStable();
    const debugElement = fixture.debugElement;
    const races = debugElement.queryAll(By.directive(Race));
    expect(races.length).withContext('You should have two `Race` displayed').toBe(2);
  });
});
