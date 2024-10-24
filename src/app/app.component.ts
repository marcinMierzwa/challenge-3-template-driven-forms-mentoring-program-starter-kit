import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

export interface User {
  email: string,
  username: string,
  password: string,
  roles: Role[],
  accesslevel: boolean[]
}

export enum Role {
  User = 'user',
  Moderator = 'moderator',
  Admin = 'admin'
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  title = 'mentoring-program-starter-kit';
  private httpClient: HttpClient = inject(HttpClient);
  user: User = {
    email: "",
    username: "",
    password: "",
    roles: [Role.User],
    accesslevel: [false, false, false]
  }

  onSubmitted(): void {
    console.log(this.user);
  }
}
