import { Component } from '@angular/core';
import { SuperHero } from './models/super-hero';
import { SuperHeroService } from './services/super-hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  url = 'SuperHero';
  title = 'SUPERHERO.UI';
  heroes: SuperHero[] = [];

  constructor(private superHeroService: SuperHeroService) {}

  ngOnInit(): void {
    this.superHeroService
      .getSuperHero()
      .subscribe((result: SuperHero[]) => (this.heroes = result));
  }
}
