import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Observable, Observer } from 'rxjs';

import { Person } from './employee.type'
import * as Mock from 'mockjs'

const PHONE_NUMBER_REGEXP = /^((13[0-9])|(14[5,7])|(15[0-3,5-9])|(17[0,3,5-8])|(18[0-9])|166|198|199|(147))\d{8}$/
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.less']
})

export class EmployeeListComponent implements OnInit {
  validateForm: FormGroup;
  radioValue = '';

  constructor(private message: NzMessageService, private fb: FormBuilder) {
    this.validateForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      gender: ['女', [Validators.required]],
      email: ['', [Validators.email, Validators.required]],
      phone: ['', [Validators.pattern(PHONE_NUMBER_REGEXP)]],
      joinTime: ['', [this.dateValidate]]
    });
  }
  ngOnInit(): void { }

  employeeList: Person[] = [
    {
      id: 1,
      name: '张三1',
      gender: '男',
      phone: 13909095678,
      mail: '2375895644@qq.com',
      joinTime: '2020-12-30'
    },
    {
      id: 2,
      name: '张三2',
      gender: '男',
      phone: 13909095678,
      mail: '2375895644@qq.com',
      joinTime: '2020-12-30'
    },
    {
      id: 3,
      name: '张三3',
      gender: '男',
      phone: 13909095678,
      mail: '2375895644@qq.com',
      joinTime: '2020-12-30'
    },
    {
      id: 4,
      name: '张三4',
      gender: '男',
      phone: 13909095678,
      mail: '2375895644@qq.com',
      joinTime: '2020-12-30'
    },
    {
      id: 5,
      name: '张三5',
      gender: '男',
      phone: 13909095678,
      mail: '2375895644@qq.com',
      joinTime: '2020-12-30'
    },
    {
      id: 6,
      name: '张三',
      gender: '男',
      phone: 13909095678,
      mail: '2375895644@qq.com',
      joinTime: '2020-12-30'
    },
    {
      id: 7,
      name: '张三',
      gender: '男',
      phone: 13909095678,
      mail: '2375895644@qq.com',
      joinTime: '2020-12-30'
    },
    {
      id: 8,
      name: '张三',
      gender: '男',
      phone: 13909095678,
      mail: '2375895644@qq.com',
      joinTime: '2020-12-30'
    },
    {
      id: 9,
      name: '张三',
      gender: '男',
      phone: 13909095678,
      mail: '2375895644@qq.com',
      joinTime: '2020-12-30'
    },
    {
      id: 10,
      name: '张三',
      gender: '男',
      phone: 13909095678,
      mail: '2375895644@qq.com',
      joinTime: '2020-12-30'
    }
  ]

  isVisible = false;

  deleteEmployee(index: number) {
    this.employeeList = this.employeeList.filter(em => em.id !== index)
    this.message.success('删除成功!', { nzDuration: 1000 })
  }

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    console.log('点击确认');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('点击取消!');
    this.isVisible = false;
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
