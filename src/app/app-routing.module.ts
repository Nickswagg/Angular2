import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularLabComponent } from './angular-lab/angular-lab.component';
import { AngularLab2Component } from './angular-lab2/angular-lab2.component';


const routes: Routes = [

  { path: 'labone', component: AngularLabComponent},
  { path: 'labtwo', component: AngularLab2Component}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
