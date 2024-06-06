import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';

export const routes: Routes = [
    {path:'home',component:HomeComponent},
    {path:'moviedetails',component:MoviedetailsComponent},
    {path:'',redirectTo:'/home',pathMatch:'full'}

];
