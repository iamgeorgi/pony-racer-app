import { Component, signal } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'pr-menu',
  imports: [NgClass],
  templateUrl: './menu.html',
  styleUrl: './menu.css'
})
export class Menu {
  readonly navbarCollapsed = signal(true);

  toggleNavbar() {
    this.navbarCollapsed.set(!this.navbarCollapsed());
  }
}
