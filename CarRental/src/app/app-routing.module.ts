import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ListComponent} from './list/list.component';
import {ContuctUsComponent} from './contuct-us/contuct-us.component';

const routes: Routes = [ 
  {

    path: "", component: HomeComponent

},

{

    path: "list", component: ListComponent

},

{
  path:"contuct-us", component: ContuctUsComponent  
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
