import { Component } from '@angular/core';
import { HeaderComponent } from '../core/header/header.component';
import { FooterComponent } from '../core/footer/footer.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-living-room',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, MatIconModule],
  templateUrl: './living-room.component.html',
  styleUrl: './living-room.component.scss',
})
export class LivingRoomComponent {}
