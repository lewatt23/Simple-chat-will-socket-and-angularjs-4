import { RegisterComponent } from './../register/register.component';
import { LoginComponent } from '../login/login.component';
import { Routes } from '@angular/router';
import { ChatComponent } from '../chat/chat.component';
import { UrlGards } from '../service/router.service';

export  const appRoutes: Routes = [
    { path: '', component: LoginComponent},
    { path: 'login', component: LoginComponent },
    { path: 'user/:name', component: ChatComponent, canActivate: [UrlGards]},
    { path: 'register', component: RegisterComponent },
    { path: '**', component: ChatComponent }
  ];
