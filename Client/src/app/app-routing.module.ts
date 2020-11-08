import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TasksComponent} from './components/tasks/tasks.component';
import { TasksAddComponent} from './components/tasks-add/tasks-add.component';
import { TasksListComponent } from './components/tasks-list/tasks-list.component';
import { UsersComponent} from './components/users/users.component';
import { UsersListComponent} from './components/users-list/users-list.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: '/users',
    pathMatch: 'full'
  },
  {
    path: 'users',
    component: UsersListComponent 
  },
  {
    path: 'users/add',
    component: UsersComponent 
  },
  {
    path: 'users/update/:id',
    component: UsersComponent
  },
  {
    path: 'tasks',
    component: TasksListComponent
  },
  {
    path: 'tasks/byuser/:id',
    component: TasksListComponent 
  },
  {
    path: 'tasks/update/:id',
    component: TasksComponent 
  },
  {
    path: 'tasks/add',
    component: TasksAddComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
