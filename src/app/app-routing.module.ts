import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsViewComponent } from './details-view/details-view.component';
import { MainViewComponent } from './main-view/main-view.component';

const routes: Routes = [
  {
    path: 'news',
    component: MainViewComponent,
  },
  {
    path: 'details/:new-id',
    component: DetailsViewComponent,
  },
  {
    path: '',
    redirectTo: 'news',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
