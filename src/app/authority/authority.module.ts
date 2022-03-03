import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorityRoutingModule } from './authority-routing.module';
import { AuthorityListComponent } from './authority-list/authority-list.component';


@NgModule({
  declarations: [
    AuthorityListComponent
  ],
  imports: [
    CommonModule,
    AuthorityRoutingModule
  ]
})
export class AuthorityModule { }
