import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { RESTAURANTS, SWEETS } from '../data/food';
import { searchUrl } from '../core/maps';

type Filter = 'todos' | 'reserva' | 'barato' | 'plan';

@Component({
  selector: 'app-food',
  templateUrl: './food.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Food {
  protected readonly filter = signal<Filter>('todos');
  protected readonly filters: { id: Filter; label: string }[] = [
    { id: 'todos', label: 'Todos' },
    { id: 'plan', label: 'En el plan' },
    { id: 'barato', label: 'Baratos' },
    { id: 'reserva', label: 'Hay que reservar' },
  ];
  protected readonly sweets = SWEETS;

  protected readonly list = computed(() => {
    switch (this.filter()) {
      case 'reserva':
        return RESTAURANTS.filter((r) => r.reserve);
      case 'barato':
        return RESTAURANTS.filter((r) => r.price === '€');
      case 'plan':
        return RESTAURANTS.filter((r) => r.day);
      default:
        return RESTAURANTS;
    }
  });

  protected maps(name: string, zone: string): string {
    return searchUrl(zone === 'Nápoles' ? name + ', Napoli' : name);
  }
}
