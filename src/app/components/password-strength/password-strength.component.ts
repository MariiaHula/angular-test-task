import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-password',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  template: `
    <section>
     <div class="strength-wrapper">
 <div class="show-wrapper">
  <input class="strength-input" type="{{ showPassword ? 'text' : 'password' }}" placeholder="Enter Password" (input)="checkPasswordStrength($event)" [(ngModel)]="password">
  <button class="strength-button" 
      [ngClass]="{ 'yellow-button': !showPassword, 'blue-button': showPassword }" 
      (click)="togglePasswordVisibility()">
    {{ showPassword ? 'Hide': 'Show' }} Password
  </button>
</div>
  <div class="strength-section" [ngStyle]="{'background-color': passwordStrengthColors[0]}"></div>
  <div class="strength-section" [ngStyle]="{'background-color': passwordStrengthColors[1]}"></div>
  <div class="strength-section" [ngStyle]="{'background-color': passwordStrengthColors[2]}"></div>
</div>
    </section>
  `,
  styleUrls: ['./password-strength.component.scss']
})
    
export class PasswordStrengthComponent {

password: string = '';
passwordStrengthColors: string[] = ['gray', 'gray', 'gray'];
showPassword: boolean = false;

checkPasswordStrength(event: Event): void {
     
const password = (event.target as HTMLInputElement).value;
        
    if (password.length === 0) {
      this.passwordStrengthColors = ['gray', 'gray', 'gray'];
    } else if (password.length < 8) {
      this.passwordStrengthColors = ['red', 'red', 'red'];
    } else {
      const hasLetters = /[a-zA-Z]/.test(password);
      const hasDigits = /[0-9]/.test(password);
      const hasSymbols = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password);

      if (hasLetters && hasDigits && hasSymbols) {
        this.passwordStrengthColors = ['green', 'green', 'green'];
      } else if ((hasLetters && hasDigits) || (hasLetters && hasSymbols) || (hasDigits && hasSymbols)) {
        this.passwordStrengthColors = ['yellow', 'yellow', 'gray'];
      } else {
        this.passwordStrengthColors = ['red', 'gray', 'gray'];
      }
    }
  }
    togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }
}