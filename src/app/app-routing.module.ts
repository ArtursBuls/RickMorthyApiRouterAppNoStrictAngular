import { CharacterDetailsComponent } from './components/character-details/character-details.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AboutComponent } from './components/about/about.component';
import { AllCharsComponent } from './components/all-chars/all-chars.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'all-characters', pathMatch: 'full', component: AllCharsComponent },
  {
    path: 'all-characters/:id',
    pathMatch: 'full',
    component: CharacterDetailsComponent,
  },
  { path: 'about', pathMatch: 'full', component: AboutComponent },
  { path: '', pathMatch: 'full', redirectTo: 'all-characters' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
