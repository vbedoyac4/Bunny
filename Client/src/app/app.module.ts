import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { UsersComponent } from './components/users/users.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { TasksListComponent } from './components/tasks-list/tasks-list.component';
import { TasksService} from './services/tasks.service';
import { UsersService} from './services/users.service';
import { TasksAddComponent } from './components/tasks-add/tasks-add.component';
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    UsersComponent,
    UsersListComponent,
    TasksComponent,
    TasksListComponent,
    TasksAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    TasksService,
    UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
