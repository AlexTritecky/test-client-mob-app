import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./living-room/living-room.component').then((m) => m.LivingRoomComponent),
  },
];
