import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Calendario2022Component } from './page/calendario2022/calendario2022.component';
import { Calendario2023Component } from './page/calendario2023/calendario2023.component';
import { HomeComponent } from './page/home/home.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'calendario2023', component:Calendario2023Component},
  {path:'calendario2022', component:Calendario2022Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
