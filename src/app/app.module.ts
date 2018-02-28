import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { TasksComponent } from './tasks/tasks.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';

// const appRoutes: Routes = [
//   path: '', 
//   children: [
//     {path: '', redirectTo: '/login', pathMatch: 'full' },
   
//    ],
//   component: AppComponent
// },
// { path: 'login', component: LoginComponent },
//   { path: 'tasks', component: TasksComponent }

 
// ];
@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    HeaderComponent,
    LoginComponent,
    HomeComponent
],
  imports: [
    BrowserModule,
    //RouterModule.forRoot(appRoutes, {useHash:true})
    RouterModule.forRoot([
      { 
        
        path: '', 
        children: [
          {path: '', redirectTo: '/login', pathMatch: 'full' },
          { path: 'tasks', component: TasksComponent }
          
         ],
        component: HomeComponent
      },
      { path: 'login', component: LoginComponent },
     
    ],
    {useHash:true}
  )
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
