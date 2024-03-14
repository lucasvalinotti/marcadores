import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './cartas/pages/home-page/home-page.component';
import { MoscaPageComponent } from './cartas/pages/mosca-page/mosca-page.component';
import { ChinchonPageComponent } from './cartas/pages/chinchon-page/chinchon-page.component';
import { TrucoPageComponent } from './cartas/pages/truco-page/truco-page.component';

const routes: Routes = [
  {path: 'home', component: HomePageComponent},
  {path: 'mosca', component: MoscaPageComponent},
  {path: 'chinchon', component: ChinchonPageComponent},
  {path: 'truco', component: TrucoPageComponent},
  {path: '', redirectTo:'home', pathMatch: 'full'},
  {path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],  
  exports: [RouterModule]
})
export class AppRoutingModule { }
