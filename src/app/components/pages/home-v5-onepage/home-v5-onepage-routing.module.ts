import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeV5OnepageComponent } from './home-v5-onepage.component';

const routes: Routes = [{ path: '', component: HomeV5OnepageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeV5OnepageRoutingModule { }
