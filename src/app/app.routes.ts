import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AlbumComponent } from './album/album.component';
import { FormComponent } from './form/form.component';


export const routes: Routes = [
    {path: 'home', component: HomeComponent},

    {path: 'album', component: AlbumComponent}, 
    { path: 'form', component: FormComponent },  
    {path: '', redirectTo: '/home', pathMatch: 'full'}
];
