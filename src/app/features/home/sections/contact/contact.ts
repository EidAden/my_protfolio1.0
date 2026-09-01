import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Buttons } from '../../../../shared/ui/buttons/buttons';
import { TranslocoPipe } from '@jsverse/transloco';

@Component({
  selector: 'app-contact',
  imports: [FormsModule, Buttons, TranslocoPipe, ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  private http = inject(HttpClient);
  private fb = inject(FormBuilder);

  borderlight = '2px solid #BBBBBB';

  contactForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],

    email: [
      '',
      [
        Validators.required,
        Validators.email,
        Validators.pattern(/^[^\s@]+@[^\s@]+\.(com|de|net|org|io|dev|eu|uk)$/i),
      ],
    ],

    message: ['', [Validators.required, Validators.minLength(10)]],
    privacy: [false, Validators.requiredTrue],
  });

  mailTest = false;

  post = {
    endPoint: 'https://eidaden.com/php/sendMail.php',
  };

  onSubmit(): void {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    if (this.mailTest) {
      this.resetForm();
      return;
    }

    const formData = this.contactForm.getRawValue();

    this.http
      .post(this.post.endPoint, formData, {
        headers: {
          'Content-Type': 'application/json',
        },
        responseType: 'text',
      })
      .subscribe({
        next: (response) => {
          console.log('Mail sent:', response);
          this.resetForm();
        },
        error: (error) => {
          console.error('Error sending mail:', error);
        },
        complete: () => {
          console.info('Send post complete');
        },
      });
  }

  private resetForm(): void {
    this.contactForm.reset({
      name: '',
      email: '',
      message: '',
      privacy: false,
    });
  }
}
