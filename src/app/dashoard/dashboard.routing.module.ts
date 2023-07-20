import { NgModule } from "@angular/core";
import { Route } from "@angular/router";
import { RouterModule } from '@angular/router';
import { DashoardComponent } from "./dashoard.component";
import { MainContentComponent } from "./main-content/main-content.component";
import { MainContentShellComponent } from "./main-content-shell/main-content-shell.component";

export const routes: Route[] = [
  {
    path: '',
    component: DashoardComponent,
    children: [
      {
        path: 'login',
        component: MainContentShellComponent,
      },
    ]
  },
];
@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
})
export class DashboardRoutingModulle { }
