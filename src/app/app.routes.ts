import { Routes } from '@angular/router';
import { HomeComponent } from './home/home';
import { ProjectsComponent } from './projects/projects';
import { ContactComponent } from './contact/contact';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'contact', component: ContactComponent },
];


