import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { SearchComponent } from '../search/search.component';
import { CitycardComponent } from '../citycard/citycard.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SidebarComponent,SearchComponent,CitycardComponent,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  cities=[
    {name:"jaipur",image:"assets/jaipur.jpeg"},
    {name:"kolkata",image:"assets/goa.jpeg"},
    {name:"ladakh",image:"assets/ladakh.jpeg"},
    {name:"delhi",image:"assets/delhi.jpeg"},
    {name:"agra",image:"assets/agra.jpeg"},
    {name:"goa",image:"assets/goa.jpeg"},
    {name:"jaipur",image:"assets/jaipur.jpeg"},
    {name:"kolkata",image:"assets/agra.jpeg"},
    {name:"ladakh",image:"assets/ladakh.jpeg"},
    {name:"delhi",image:"assets/delhi.jpeg"},
    {name:"agra",image:"assets/agra.jpeg"},
    {name:"goa",image:"assets/goa.jpeg"}
  ]

}
