import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;

  constructor() {
    this.name = '';
    this.email = '';
    this.subject = '';
    this.message = '';
  }

  postData(contactForm: NgForm): void {
    console.log(contactForm);
    console.log('-------------------------');
    console.log(this.name);
    console.log(this.email);
    console.log(this.subject);
    console.log(this.message);
    //code here t send data to the backend or api

    //reseting form
    contactForm.resetForm();
  }
}
