import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';

import { Person } from './employee.type'
import * as Mock from 'mockjs'

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.less']
})

export class EmployeeListComponent implements OnInit {

  constructor(private message: NzMessageService) { }
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

  deleteEmployee(index: number) {
    this.employeeList = this.employeeList.filter(em => em.id !== index)
    this.message.success('删除成功!', { nzDuration: 1000 })
  }
}
