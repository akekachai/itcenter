import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetbypersonComponent } from './getbyperson.component';
const routes: Routes = [{ path: 'profile', component: GetbypersonComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GetbypersonRoutingModule { }
