import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Dr Nice', element: 'air' },
      { id: 12, name: 'Narco', element: 'earth' },
      { id: 13, name: 'Bombasto', element: 'fire' },
      { id: 14, name: 'Celeritas', element: 'water' },
      { id: 15, name: 'Magneta', element: 'magma' },
      { id: 16, name: 'RubberMan', element: 'air' },
      { id: 17, name: 'Dynama', element: 'fire' },
      { id: 18, name: 'Dr IQ', element: 'air' },
      { id: 19, name: 'Magma', element: 'magma' },
      { id: 20, name: 'Tornado', element: 'air' }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
