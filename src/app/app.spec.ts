import { ComponentFixtureAutoDetect, TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [{ provide: ComponentFixtureAutoDetect, useValue: true }]
    })
  );

  it('should have a title', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const element = fixture.nativeElement as HTMLElement;
    expect(element.querySelector('h1')!.textContent).withContext('You should have an `h1` with the text Ponyracer').toContain('Ponyracer');
  });
});
