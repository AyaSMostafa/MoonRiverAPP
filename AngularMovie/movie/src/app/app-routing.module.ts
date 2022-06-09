import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {MovieComponent} from './movie/movie.component';
import {CategoryComponent} from './category/category.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HomeComponent } from './Components/home/home.component';
import { CardComponent } from 'ng-cdbangular';

const routes: Routes = [
  {path:"",redirectTo:"Home",pathMatch:"full"},
  {path:"Home",component:HomeComponent},
  {path:'movie',component:MovieComponent},
  {path:'category',component:CategoryComponent},
  {path:"cards",component:CardComponent},
  {path:'header',component:HeaderComponent},
  {path:'footer',component:FooterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
