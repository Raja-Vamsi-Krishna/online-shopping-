import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ItemdetailComponent } from './components/itemdetail/itemdetail.component';
import { ItemsListComponent } from './components/items-list/items-list.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';

const routes: Routes = [
{path:'items',component:ItemsListComponent},
{path:'category/:id',component:ItemsListComponent},
{path:'searchitem/:id',component:ItemdetailComponent},
{path:'search/:keyword',component:ItemsListComponent},
{path:'contact',component:ContactComponent},
{path:'about',component:AboutComponent},
{path:'',redirectTo:'/items', pathMatch:'full'},
{path:'**',component:PagenotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }





