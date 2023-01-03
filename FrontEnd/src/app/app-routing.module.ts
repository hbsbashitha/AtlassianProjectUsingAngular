import { UserDetailsPageComponent } from './components/user-details-page/user-details-page.component';
import { PopupModelComponent } from './components/popup-model/popup-model.component';
import { Error404PageComponent } from './components/error404-page/error404-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', redirectTo:'products',pathMatch:'full'},
  {path:'login', component: LoginPageComponent},
  {path:'404error', component: Error404PageComponent},
  {path:'popup', component: PopupModelComponent},
  {path:'userDetails', component: UserDetailsPageComponent},



];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
