import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './views/about/about.component';
import { HomeComponent } from './views/home/home.component';
import { PolicyComponent } from './views/policy/policy.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {
      title: 'Title for Home Component',
      description: 'Description of Home Component',
      // social media
      ogUrl: '/',
      ogTitle: 'Title of Home Component for Social Media',
      ogDescription: 'Description of Home Component for Social Media',
      ogImage: 'Home Image Path for Social Media',
    },
  },
  {
    path: 'about',
    component: AboutComponent,
    data: {
      title: 'Title for About Component',
      description: 'Description of About Component',
      // social media
      ogUrl: '/about',
      ogTitle: 'Title of About Component for Social Media',
      ogDescription: 'Description of About Component for Social Media',
      ogImage: 'About Image Path for Social Media',
    },
  },
  {
    path: 'policy',
    component: PolicyComponent,
    data: {
      title: 'Title for Policy Component',
      description: 'Description of Policy Component',
      robots: 'noindex, nofollow',
      // social media
      ogUrl: '/policy',
      ogTitle: 'Title of Policy Component for Social Media',
      ogDescription: 'Description of Policy Component for Social Media',
      ogImage: 'Policy Image Path for Social Media',
    },
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
