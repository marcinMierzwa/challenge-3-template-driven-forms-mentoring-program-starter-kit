import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

export interface User {
  email: string;
  username: string;
  password: string;
  roles: string[];
  accesslevel: boolean[];
}

export interface UserResponse {
  id: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'mentoring-program-starter-kit';
  private httpClient: HttpClient = inject(HttpClient);
  rolesOptions = ['User', 'Moderator', 'Admin'];
  accesslevelOptions = ['Read', 'Write', 'Full'];
  user: User = {
    email: '',
    username: '',
    password: '',
    roles: [],
    accesslevel: [false, false, false],
  };

  isAtLeastOneAccessLevelSelected(): boolean {
    return this.user.accesslevel.some((level) => level);
  }

  onSubmitted() {
    this.httpClient
      .post<UserResponse>('https://fakestoreapi.com/users', this.user)
      .subscribe({
        next: (res: UserResponse) => {
          alert(`user with id ${res.id} succesfully registered`);
        },
        error: (err) => console.log(err),
      });
  }
}
