import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeV6OnepageComponent } from './home-v6-onepage.component';

const routes: Routes = [{ path: '', component: HomeV6OnepageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeV6OnepageRoutingModule { }
