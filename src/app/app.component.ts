import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SignUpComponent } from './component/sign-up/sign-up.component';
import { LoginComponent } from './component/login/login.component';
// import { SidebarComponent } from './component/sidebar/sidebar.component';
// import { SearchComponent } from './component/search/search.component';
// import { HeaderComponent } from './component/header/header.component';
// import { AuthComponent } from './component/auth/auth.component';
// import { ProfileComponent } from './component/profile/profile.component';
// import { ErrorComponent } from './component/error/error.component';
// import { EmployeeCardComponent } from './component/employee-card/employee-card.component';
// import { BrowserModule } from '@angular/platform-browser';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,SignUpComponent,LoginComponent
    // SidebarComponent,
    // SearchComponent,
    // HeaderComponent,
    // AuthComponent,
    // ProfileComponent,
    // ErrorComponent,
    // EmployeeCardComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'project';
}
