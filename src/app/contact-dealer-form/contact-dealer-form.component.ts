import { Component, OnInit } from '@angular/core';
import { Contact } from '../src/contact';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-contact-dealer-form',
  templateUrl: './contact-dealer-form.component.html',
  styleUrls: ['./contact-dealer-form.component.less']
})
export class ContactDealerFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  validateEmail = true;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  titles = ['Please select', 'Mr',
  'Mrs', 'Miss'];

model = new Contact(this.titles[0], 'First Name', 'Surname', '');

submitted = false;

onSubmit() { this.submitted = true; }


}
