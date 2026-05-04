import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Buttons } from '../../../../shared/ui/buttons/buttons';

@Component({
  selector: 'app-contact',
  imports: [FormsModule, Buttons],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  http = inject(HttpClient);
  borderlight = '2px solid #BBBBBB solid 2px';

  contactForm = {
    name: '',
    email: '',
    message: '',
    privacy: false,
  };

  mailTest = false;

  post = {
    endPoint: 'https://eidaden.com/php/sendMail.php',
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http
        .post(this.post.endPoint, this.contactForm, {
          headers: {
            'Content-Type': 'application/json',
          },
          responseType: 'text',
        })
        .subscribe({
          next: (response) => {
            console.log('Mail sent:', response);
            ngForm.resetForm();
          },
          error: (error) => {
            console.error('Error sending mail:', error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      ngForm.resetForm();
    }
  }
}
