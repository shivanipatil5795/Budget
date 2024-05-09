import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { ExpenseComponent } from './expense/expense.component';

const routes: Routes = [

  {path:'', component:HomeComponent},
  {path:'app', component:AppComponent},
  {path:'expense', component: ExpenseComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
