import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeV3OnepageComponent } from './home-v3-onepage.component';

const routes: Routes = [{ path: '', component: HomeV3OnepageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeV3OnepageRoutingModule { }
