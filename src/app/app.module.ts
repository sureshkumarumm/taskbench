import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';


import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';
import { HeaderComponent } from './header/header.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'tasks', component: TasksComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    HeaderComponent,
    LoginComponent
],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, {useHash:true})
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
