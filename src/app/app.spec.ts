import { ComponentFixtureAutoDetect, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { App } from './app';
import { Menu } from './menu/menu';

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

  it('should use the menu component', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const element = fixture.debugElement;
    expect(element.query(By.directive(Menu)))
      .withContext('You probably forgot to add Menu to the App template')
      .not.toBeNull();
  });
});
