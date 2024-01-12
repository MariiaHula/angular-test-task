import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PasswordInputStrengthComponent } from '../password-input-strength/password-input-strength.component';
import { PasswordStrengthService } from '../../password-strength.service';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-password',
  standalone: true,
  imports: [
    RouterModule,
    PasswordInputStrengthComponent,
    CommonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './password-strength.component.html',
  styleUrls: ['./password-strength.component.scss'],
})
export class PasswordStrengthComponent {
  public formGroup = new FormGroup({
    password: new FormControl(''),
  });

  get password(): string {
    return this.formGroup.get('password')?.value || '';
  }

  passwordStrengthColors: string[] = ['gray', 'gray', 'gray'];
  showPassword: boolean = false;

  constructor(
    private passwordStrengthService: PasswordStrengthService = inject(
      PasswordStrengthService
    )
  ) {}

  checkPasswordStrength(): void {
    this.passwordStrengthColors =
      this.passwordStrengthService.getPasswordStrength(this.password);
  }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }
}
