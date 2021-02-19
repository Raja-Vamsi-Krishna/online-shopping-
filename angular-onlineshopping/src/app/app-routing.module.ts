import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemsListComponent } from './components/items-list/items-list.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';

const routes: Routes = [
{path:'items',component:ItemsListComponent},
{path:'category/:id',component:ItemsListComponent},
{path:'',redirectTo:'/items', pathMatch:'full'},
{path:'**',component:PagenotfoundComponent}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
