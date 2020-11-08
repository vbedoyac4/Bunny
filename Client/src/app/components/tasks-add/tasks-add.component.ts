import { Component, OnInit, HostBinding } from '@angular/core';
import { Router } from '@angular/router';
import { TasksService} from 'src/app/services/tasks.service';
import { Task} from '../../models/task';

@Component({
  selector: 'app-tasks-add',
  templateUrl: './tasks-add.component.html',
  styleUrls: ['./tasks-add.component.css']
})
export class TasksAddComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  tasks : any = [];
  task: Task = {
    Id:0,
    description: '',
    state: '',
    user_id: ''
  }

  id;

  constructor(private router: Router, private taskService: TasksService) { }

  ngOnInit(): void {
  }

  addTask() {
    this.taskService.saveTask(this.task)
      .subscribe(
        res => {
          console.log(res);
          
        },
        err => console.error(err)
      )
      this.router.navigate(['/users']);
  }

}
