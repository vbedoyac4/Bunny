import { Component, OnInit, HostBinding } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TasksService } from 'src/app/services/tasks.service';
import { Task } from '../../models/task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  task: Task = {
    Id:0,
    description: '',
    state: '',
    user_id: ''
  };

  id;

  constructor(private router: Router, private taskService: TasksService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    //console.log(params);
    this.id = params.id;
  }

  updateTask(){
    this.taskService.updateTask(this.id, this.task).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/tasks/byuser/'+this.id])
      },
      err => console.log(err)
    )
  }

}
