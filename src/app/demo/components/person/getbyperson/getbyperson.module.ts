import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastModule } from 'primeng/toast';
import { GetbypersonRoutingModule } from './getbyperson-routing.module';
import { GetbypersonComponent } from './getbyperson.component';

@NgModule({
  declarations: [GetbypersonComponent],
  imports: [
    CommonModule,
    ToastModule,
    GetbypersonRoutingModule
  ]
})
export class GetbypersonModule { }
