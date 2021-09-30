import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  @Input() isOpen!: boolean;
  @Output() closeForm = new EventEmitter();
  isModalSignUp: boolean = false;
  exform!: FormGroup;

  ngOnInit(): void {
    this.exform = new FormGroup({
      userName: new FormControl(null, Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }
  constructor(private formBuilder: FormBuilder) {}
  clicksub() {
    console.log(this.exform.value);
    this.exform.reset();
  }
  get userName() {
    return this.exform.get('userName');
  }
  get email() {
    return this.exform.get('email');
  }
  get password() {
    return this.exform.get('password');
  }
  toggleModalSignUp() {
    this.isModalSignUp = !this.isModalSignUp;
    console.log('test modal, hello');
    return this.isModalSignUp;
  }

  handleCloseForm() {
    if (this.userName?.invalid || this.password?.invalid) {
      return;
    } else {
      this.closeForm.emit();
    }
  }
}
