import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { SearchComponent } from '../search/search.component';
import { HeaderComponent } from '../header/header.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { EmployeeCardComponent } from '../employee-card/employee-card.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule,FormsModule,SearchComponent,
    HeaderComponent,
    SidebarComponent,
    EmployeeCardComponent
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  employees = [
    { name: 'Rajesh Kumar', role: 'Software Engineer',aboutme:"Hii i am asif aziz and i am frontend developoer from nirjai technology ...." ,experience:12,location: 'Chennai, Tamil Nadu', image: 'assets/emp3.jpeg' },
    { name: 'Arnav Kapoor', role: 'Frontend Developer',aboutme:"Hii i am asif aziz and i am frontend developoer from nirjai technology....", experience:5, location: 'Bengaluru, Karnataka', image: 'assets/emp2.jpeg' },
    { name: 'Rohit Patel', role: 'Data Analyst',aboutme:"Hii i am asif aziz and i am frontend developoer from nirjai technology ....", experience:7, location: 'Mumbai', image: 'assets/emp3.jpeg' },
    {name:"uday",role:"intern",location:"delhi",aboutme:"Hii i am asif aziz  and i am frontend developoer from nirjai technology ....", experience:4,image:"assets/emp2.jpeg"},
    { name: 'Rajesh Kumar', role: 'Software Engineer',aboutme:"Hii i am asif aziz and i am frontend developoer from nirjai technology ...." ,experience:12,location: 'Chennai, Tamil Nadu', image: 'assets/emp3.jpeg' },
    { name: 'Arnav Kapoor', role: 'Frontend Developer',aboutme:"Hii i am asif aziz and i am frontend developoer from nirjai technology....", experience:5, location: 'Bengaluru, Karnataka', image: 'assets/emp2.jpeg' },
    { name: 'Rohit Patel', role: 'Data Analyst',aboutme:"Hii i am asif aziz and i am frontend developoer from nirjai technology ....", experience:7, location: 'Mumbai', image: 'assets/emp3.jpeg' },
    {name:"uday",role:"intern",location:"delhi",aboutme:"Hii i am asif aziz  and i am frontend developoer from nirjai technology ....", experience:4,image:"assets/emp2.jpeg"}
  ];
}
