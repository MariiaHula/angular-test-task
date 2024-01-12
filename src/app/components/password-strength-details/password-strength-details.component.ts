import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-password-details',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './password-strength-details.component.html',
  styleUrls: ['./password-strength-details.component.scss'],
})
export class PasswordStrengthDetailsComponent {
  @Input() passwordStrengthColors!: string[];
}
