import { Component } from '@angular/core';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  username: string = ''
  email: string = ''
  password: string = ''
  message: string = ''
  constructor(private authService: AuthService) {}
  onRegister(): void {
    this.authService.register(this.username, this.email, this.password).subscribe({
      next: (res) => {
        this.message = 'Registration successful! Please log in.';
      },
      error: (err) => {
        this.message = err.error.message || 'Registration failed.';
      },
    });
  }
}
