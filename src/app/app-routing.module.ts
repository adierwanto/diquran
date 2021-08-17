import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { DetailSurahComponent } from './components/detail-surah/detail-surah.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: ProfileComponent },
  { path: 'surah/:id', component: DetailSurahComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
