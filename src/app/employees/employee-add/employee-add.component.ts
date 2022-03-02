import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Observable, Observer } from 'rxjs';

const PHONE_NUMBER_REGEXP = /^((13[0-9])|(14[5,7])|(15[0-3,5-9])|(17[0,3,5-8])|(18[0-9])|166|198|199|(147))\d{8}$/
@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.less']
})
export class EmployeeAddComponent implements OnInit {
  validateForm: FormGroup;
  radioValue = '';

  constructor(private fb: FormBuilder) {
    this.validateForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      gender: ['女', [Validators.required]],
      email: ['', [Validators.email, Validators.required]],
      phone: ['', [Validators.pattern(PHONE_NUMBER_REGEXP)]],
      joinTime: ['', [this.dateValidate]]
    });
  }

  ngOnInit(): void {
  }

  dateValidate(control: FormControl) {
    const selectDate = control.value
    const currentDate = new Date()
    if (selectDate < currentDate) {
      return null
    } else {
      return { dateError: true }
    }
  }

  submitForm(): void {
    // console.log('submit', this.validateForm.value);
    if (!this.validateForm.valid) {
      return
    }

    // 提交表单发送添加用户请求
    const joinDate = this.validateForm.value.joinTime && this.validateForm.value.joinTime - 0//把标准日期改为时间戳格式
    const eployee = { ...this.validateForm.value, joinDate }
  }

  resetForm(e: MouseEvent): void {
    e.preventDefault();
    this.validateForm.reset({ gender: '女' });//重置已经填写的内容的方法
    for (const key in this.validateForm.controls) {
      if (this.validateForm.controls.hasOwnProperty(key)) {
        this.validateForm.controls[key].markAsPristine();
        this.validateForm.controls[key].updateValueAndValidity();
      }
    }
  }
}
