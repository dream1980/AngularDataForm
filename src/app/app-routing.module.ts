import { AngularinfoComponent } from './components/angularinfo/angularinfo.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ComputersComponent } from './components/computers/computers.component';
import { AddComponent } from './components/add/add.component';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {path: "", pathMatch: "full", redirectTo: "/home"},
  {path: "home", component: HomeComponent},
  {path: "angularinfo", component: AngularinfoComponent},
  {path: "computers", component: ComputersComponent},
  {path: "add", component: AddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HttpClientModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
