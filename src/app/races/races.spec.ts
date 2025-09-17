import { ComponentFixtureAutoDetect, TestBed } from '@angular/core/testing';
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
    const element = fixture.nativeElement as HTMLElement;
    const raceNames = element.querySelectorAll('h2');
    expect(raceNames.length).withContext('You should have an `h2` element per race in your template').toBe(2);
    expect(raceNames[0].textContent).toContain('Lyon');
    expect(raceNames[1].textContent).toContain('London');
  });
});
