import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  {
    path: '',
    redirectTo: 'view-post',
    pathMatch: 'full'
  },
  
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },

  
  {
    path: 'array',
    loadChildren: () => import('./array/array.module').then( m => m.ArrayPageModule)
  },
  {
    path: 'lab5',
    loadChildren: () => import('./lab5/lab5.module').then( m => m.Lab5PageModule)
  },
  {
    path: 'selangor',
    loadChildren: () => import('./selangor/selangor.module').then( m => m.SelangorPageModule)
  },
  {
    path: 'kelantan',
    loadChildren: () => import('./kelantan/kelantan.module').then( m => m.KelantanPageModule)
  },
  {
    path: 'perak',
    loadChildren: () => import('./perak/perak.module').then( m => m.PerakPageModule)
  },
  {
    path: 'kualalumpur',
    loadChildren: () => import('./kualalumpur/kualalumpur.module').then( m => m.KualalumpurPageModule)
  },
  {
    path: 'terengganu',
    loadChildren: () => import('./terengganu/terengganu.module').then( m => m.TerengganuPageModule)
  },
  {
    path: 'survey-apps',
    loadChildren: () => import('./survey-apps/survey-apps.module').then( m => m.SurveyAppsPageModule)
  },
  {
    path: 'lab6',
    loadChildren: () => import('./lab6/lab6.module').then( m => m.Lab6PageModule)
  },
  {
    path: 'video',
    loadChildren: () => import('./video/video.module').then( m => m.VideoPageModule)
  },
  {
    path: 'lab7',
    loadChildren: () => import('./lab7/lab7.module').then( m => m.Lab7PageModule)
  },
  {
    path: 'programme',
    loadChildren: () => import('./programme/programme.module').then( m => m.ProgrammePageModule)
  },
  {
    path: 'contactus',
    loadChildren: () => import('./contactus/contactus.module').then( m => m.ContactusPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'view-post',
    loadChildren: () => import('./view-post/view-post.module').then( m => m.ViewPostPageModule)
  },
  {
    path: 'edit-post/:id',
    loadChildren: () => import('./edit-post/edit-post.module').then( m => m.EditPostPageModule)
},

  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
