import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeV4OnepageComponent } from './home-v4-onepage.component';

const routes: Routes = [{ path: '', component: HomeV4OnepageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeV4OnepageRoutingModule { }
