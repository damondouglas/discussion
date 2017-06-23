import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component'
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component'
import { TopicpageComponent } from './topicpage/topicpage.component'

const routes: Routes = [
  { path: "dashboard", component: DashboardComponent },
  { path: "login", component: LoginComponent },
  { path: "topic/:topic_id", component: TopicpageComponent},
  { path: "", pathMatch: "full", redirectTo: "/" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
