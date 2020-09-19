import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RegisterPage } from './register.page';
import { UserTypeComponent } from './user-type/user-type.component';

const routes: Routes = [
  {
    path: '',
    component: RegisterPage
  },
  {
    path: 'user-type',
    component: UserTypeComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RegisterPage, UserTypeComponent]
})
export class RegisterPageModule {}
