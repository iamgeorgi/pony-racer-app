import { ComponentFixtureAutoDetect, TestBed } from '@angular/core/testing';
import { Menu } from './menu';

describe('Menu', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [{ provide: ComponentFixtureAutoDetect, useValue: true }]
    })
  );

  it('should toggle the class on click', async () => {
    const fixture = TestBed.createComponent(Menu);
    const element = fixture.nativeElement as HTMLElement;

    await fixture.whenStable();

    const navbarCollapsed = element.querySelector('#navbar')!;
    expect(navbarCollapsed).withContext('No element with the id `#navbar`').not.toBeNull();
    expect(navbarCollapsed.classList)
      .withContext('The element with the id `#navbar` should have the class `collapse`')
      .toContain('collapse');

    const button = element.querySelector('button')!;
    expect(button).withContext('No `button` element to collapse the menu').not.toBeNull();
    button.click();

    await fixture.whenStable();

    const navbar = element.querySelector('#navbar')!;
    expect(navbar.classList)
      .withContext('The element with the id `#navbar` should have not the class `collapse` after a click')
      .not.toContain('collapse');

    button.click();
    await fixture.whenStable();

    expect(navbar.classList)
      .withContext('The element with the id `#navbar` should have the class `collapse` after a second click')
      .toContain('collapse');
  });
});
