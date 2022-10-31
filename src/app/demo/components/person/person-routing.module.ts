import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [RouterModule.forChild([
 
        { path: 'profile', loadChildren: () => import('./getbyperson/getbyperson.module').then(m => m.GetbypersonModule) }
    ])],
    exports: [RouterModule]
})
export class PersonRoutingModule { }
