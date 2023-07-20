import { NgModule } from "@angular/core";
import { Route } from "@angular/router";
import { RouterModule } from '@angular/router';

export const routes: Route[] = [
  { path: '', pathMatch: "full", redirectTo: "dashboard" },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashoard/dashoard.module').then((m) => m.DashoardModule),
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
