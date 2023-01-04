import { UserDetailsPageComponent } from './components/user-details-page/user-details-page.component';
import { PopupModelComponent } from './components/popup-model/popup-model.component';
import { Error404pageComponent } from './components/error404page/error404page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './helpers/auth.guard';

// const guard=()=> {return false};
const routes: Routes = [
  {path:'login', component: LoginPageComponent},
  // {path:'login', component: LoginPageComponent},

  {path:'404error', component: Error404pageComponent},
  {path:'test', component: PopupModelComponent},
  {path:'userDetails', component: UserDetailsPageComponent,canActivate:[ AuthGuard]},
  { path: '**', component: Error404pageComponent },


];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
