import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeV5Component } from './home-v5.component';

const routes: Routes = [{ path: '', component: HomeV5Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeV5RoutingModule { }
