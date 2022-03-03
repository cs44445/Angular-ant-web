import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  validateForm!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {

  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required], [this.nameLengthValidator]],
      password: [null, [Validators.required]],
      remember: [true]
    });

    if (localStorage.getItem('userName')) {
      this.router.navigateByUrl('/home')
    }
  }

  nameLengthValidator = (control: FormControl) =>
    new Observable((observer: Observer<ValidationErrors | null>) => {
      if (!control.value) {
        observer.next({ error: true, required: true })
      } else if (control.value.length < 2) {
        observer.next({ nameLength: true, error: true })
      } else {
        observer.next(null)
      }
      observer.complete()
    })

  submitForm(): void {
    if (this.validateForm.valid) {
      console.log('submit', this.validateForm.value);
      let { userName, password } = this.validateForm.value
      // const userInfo = {
      //   userName,
      //   password
      // }
      // 将userInfo信息传入login接口获取token

      localStorage.setItem('userName', JSON.parse(userName))
      this.router.navigateByUrl('/home')
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }


}
