import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  hide = true;
  constructor() { }

  ngOnInit() {
  }

}
