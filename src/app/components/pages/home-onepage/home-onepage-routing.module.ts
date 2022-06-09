import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeOnepageComponent } from './home-onepage.component';

const routes: Routes = [{ path: '', component: HomeOnepageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeOnepageRoutingModule { }
