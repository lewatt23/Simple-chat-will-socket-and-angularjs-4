import { ServiceRateit } from './service/service.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import { AsyncLocalStorageModule } from 'angular-async-local-storage';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { appRoutes } from './routes/chat.routes';
import { StorageStore } from './service/localstorage.service';
import { ChatComponent } from './chat/chat.component';
import { UrlGards } from './service/router.service';
import { SideComponent } from './side/side.component';
import { WebsocketsService } from './service/websockets.service';
import { ClientChat } from './service/clientchat.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    ChatComponent,
    SideComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false} // <-- debugging purposes only
    ),
    BrowserModule,
    ReactiveFormsModule,
    AsyncLocalStorageModule
  ],
  providers: [ServiceRateit,
    StorageStore,
     UrlGards,
     WebsocketsService,
     ClientChat],
  bootstrap: [AppComponent]
})
export class AppModule { }
