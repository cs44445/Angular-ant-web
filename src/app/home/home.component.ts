import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  constructor(private logoutService: HomeService, private router: Router, private message: NzMessageService) { }

  ngOnInit(): void { }

  isCollapsed = false;

  // 如果添加了popconfirm组件，就不需要阻止默认事件了
  // logout(e: any) {
  // e.preventDefault()//阻止a标签的点击跳转默认行为
  logout() {
    // this.logoutService.logout().subscribe(res => {
    //   console.log('退出成功', 'res');
    localStorage.removeItem('userName')
    this.router.navigateByUrl('/login')
    // }, err => {
    //   console.log('退出失败', err);
    // this.message.create(err, `可能出错了,请稍后再试`);
    // })
  }
}
