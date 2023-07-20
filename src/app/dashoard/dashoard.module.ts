import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashoardComponent } from './dashoard.component';
import { DashboardRoutingModulle } from './dashboard.routing.module';
import { HeaderComponent } from './header/header.component';
import { LeftSideNavComponent } from './left-side-nav/left-side-nav.component';
import { MainContentComponent } from './main-content/main-content.component';
import { SharedModule } from '../shared/shared.module';
import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';
import { MainContentShellComponent } from './main-content-shell/main-content-shell.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModulle,
    SharedModule,
    HttpClientModule
  ],
  declarations: [DashoardComponent, MainContentComponent, LeftSideNavComponent, HeaderComponent, MainContentShellComponent],
  providers: [HttpService]
})
export class DashoardModule { }
