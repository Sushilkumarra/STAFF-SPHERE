import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-citycard',
  standalone: true,
  imports: [],
  templateUrl: './citycard.component.html',
  styleUrl: './citycard.component.css'
})
export class CitycardComponent {
 @Input() cities: any;
}
