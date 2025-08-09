import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },  {
    path: 'about',
    loadComponent: () => import('./Pages/about/about.page').then( m => m.AboutPage)
  },
  {
    path: 'projects',
    loadComponent: () => import('./Pages/projects/projects.page').then( m => m.ProjectsPage)
  },
  {
    path: 'portfolio',
    loadComponent: () => import('./Pages/portfolio/portfolio.page').then( m => m.PortfolioPage)
  },

];
