import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChessMainComponent } from '../app/chess-main/chess-main.component';


const routes: Routes = [
  { path: '', redirectTo: 'chessmain', pathMatch: 'full' },
  { path: 'chessmain', component: ChessMainComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
