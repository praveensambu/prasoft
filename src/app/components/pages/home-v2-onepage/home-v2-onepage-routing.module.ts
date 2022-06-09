import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeV2OnepageComponent } from './home-v2-onepage.component';

const routes: Routes = [{ path: '', component: HomeV2OnepageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeV2OnepageRoutingModule { }
