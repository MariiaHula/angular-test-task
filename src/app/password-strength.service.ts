import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PasswordStrengthService {
  getPasswordStrength(password: string): string[] {
    if (password.length === 0) {
      return ['gray', 'gray', 'gray'];
    } else if (password.length < 8) {
      return ['red', 'red', 'red'];
    } else {
      const hasLetters = /[a-zA-Z]/.test(password);
      const hasDigits = /\d/.test(password);
      const hasSymbols = /[^A-Za-z\d]/.test(password);

      if (hasLetters && hasDigits && hasSymbols) {
        return ['green', 'green', 'green'];
      } else if (hasLetters && hasDigits) {
        return ['yellow', 'yellow', 'gray'];
      } else {
        return ['red', 'gray', 'gray'];
      }
    }
  }
}
