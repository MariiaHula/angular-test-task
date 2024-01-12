import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  forwardRef,
} from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-password-input',
  standalone: true,
  templateUrl: './password-input-strength.component.html',
  styleUrls: ['./password-input-strength.component.scss'],
  imports: [ReactiveFormsModule, CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PasswordInputStrengthComponent),
      multi: true,
    },
  ],
})
export class PasswordInputStrengthComponent implements ControlValueAccessor {
  public value: string | undefined;
  public showPassword: boolean = false;

  private onChange: (value: string) => void = () => {};
  private onTouched: () => void = () => {};

  constructor(private readonly changeDetector: ChangeDetectorRef) {}

  public onInputValueChange(event: Event): void {
    const targetInputElement = event.target as HTMLInputElement;
    const value = targetInputElement.value;
    this.onChange(value);
  }

  writeValue(value: string): void {
    this.value = value;

    this.changeDetector.detectChanges();
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }
}
