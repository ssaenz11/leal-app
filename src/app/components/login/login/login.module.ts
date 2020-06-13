import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../login.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material';

@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule
  ],
  exports: [LoginComponent]
})
export class LoginModule { }
