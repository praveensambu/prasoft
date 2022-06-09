import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeV6Component } from './home-v6.component';

const routes: Routes = [{ path: '', component: HomeV6Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeV6RoutingModule { }
