import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PasswordInputStrengthComponent } from '../password-input-strength/password-input-strength.component';
import { PasswordStrengthDetailsComponent } from '../password-strength-details/password-strength-details.component';
import { PasswordStrengthService } from '../../password-strength.service';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'password-strength',
  standalone: true,
  imports: [
    RouterModule,
    PasswordInputStrengthComponent,
    PasswordStrengthDetailsComponent,
    CommonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './password-strength.component.html',
  styleUrls: ['./password-strength.component.scss'],
})
export class PasswordStrengthComponent {
  passwordControl = new FormControl('');

  get password(): string {
    return this.passwordControl.value || '';
  }

  passwordStrengthColors: string[] = [];

  constructor(private passwordStrengthService: PasswordStrengthService) {
    this.checkPasswordStrength();
  }

  checkPasswordStrength(): void {
    this.passwordStrengthColors =
      this.passwordStrengthService.getPasswordStrength(this.password);
  }
}
