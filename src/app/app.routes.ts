import { Routes } from '@angular/router';
import { HeroPageComponent } from './pages/hero/hero-page/hero-page.component';
import { CounterPageComponent } from './pages/counter-page/counter-page.component';
import { DragonballPageComponent } from './pages/dragonball/dragonball-page/dragonball-page.component';
import { DragonBallSuperPageComponent } from './pages/dragonball/dragonball-super-page/dragonball-super-page.component';

export const routes: Routes = [
  {
    path: '',
    component: CounterPageComponent,
  },
  {
    path: 'hero',
    component: HeroPageComponent,
  },
  {
    path: 'dragonball',
    component: DragonballPageComponent,
  },
  {
    path: 'dragonballSuper',
    component: DragonBallSuperPageComponent,
  },
  {
    path: '**',
    redirectTo: '',
  }, 
  
];
