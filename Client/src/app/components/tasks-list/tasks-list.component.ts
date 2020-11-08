import { Component, OnInit, HostBinding } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { TasksService} from 'src/app/services/tasks.service';
import { Task} from '../../models/task';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  tasks : any = [];
  task: Task = {
    Id:0,
    description: '',
    state: '',
    user_id: ''
  }

  id;

  constructor(private activatedRoute: ActivatedRoute,private router: Router, private taskService: TasksService) { }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    //console.log(params);
    this.id = params.id;
    if (params.id) {
      this.taskService.byUser(params.id)
        .subscribe(
          res => {
            //console.log(res);
            this.tasks = res;
          },
          err => console.log(err)
        )
    }
  }

  addTask() {
    this.task.user_id = this.id;
    this.taskService.saveTask(this.task)
      .subscribe(
        res => {
         // console.log(res);
          this.router.navigate(['/task/byuser/'+this.id]);
        },
        err => console.error(err)
      )
  }

  deleteTask(id: string){
    this.taskService.deleteTask(id).subscribe(
      res =>{
        console.log(res);
        this.ngOnInit();
      },
      err => console.log(err)
    )
  }

}
