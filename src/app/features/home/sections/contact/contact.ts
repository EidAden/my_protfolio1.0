/* import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  http = inject(HttpClient);

  contactForm = {
    name: '',
    email: '',
    message: '',
    privacy: false,
  };

  mailTest = true;

  post = {
    endPoint: 'https://eidaden.com/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(form: NgForm) {
    if (form.invalid || (!this.contactForm.privacy && this.mailTest)) {
      this.http
        .post(this.post.endPoint, this.post.body(this.contactForm), this.post.options)
        .subscribe(
          (response) => {
            console.log('Mail sent successfully:', response);
          },
          (error) => {
            console.error('Error sending mail:', error);
          },
        );
      form.control.markAllAsTouched();
      return;
    }

    alert('Form submitted successfully!');

    form.resetForm({
      name: '',
      email: '',
      message: '',
      privacy: false,
    });
  }
}
 */

import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  http = inject(HttpClient);

  contactForm = {
    name: '',
    email: '',
    message: '',
    privacy: false,
  };

  post = {
    endPoint: 'https://eidaden.com/sendMail.php',
  };

  onSubmit(form: NgForm) {
    if (form.invalid || !this.contactForm.privacy) {
      form.control.markAllAsTouched();
      return;
    }

    this.http
      .post(this.post.endPoint, this.contactForm, {
        headers: {
          'Content-Type': 'application/json',
        },
        responseType: 'text',
      })
      .subscribe({
        next: (response) => {
          console.log('Mail sent successfully:', response);
          alert('Form submitted successfully!');

          form.resetForm({
            name: '',
            email: '',
            message: '',
            privacy: false,
          });
        },
        error: (error) => {
          console.error('Error sending mail:', error);
          alert('Error sending mail.');
        },
      });
  }
}
