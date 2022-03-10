import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookCardComponent } from './component/book-card/book-card.component';
import { BookDetailsComponent } from './component/book-details/book-details.component';

const routes: Routes = [
  {
    path:'', component:BookCardComponent
  },
  {
    path:'ibook/:id', component:BookDetailsComponent
  },
  {
    path:'allbooks', component:BookCardComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
