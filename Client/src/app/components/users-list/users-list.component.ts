import { Component, OnInit, HostBinding } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { User} from '../../models/user';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  users : any = [];
  public userId: string;
  user: User = {
    Id: 0,
    Name: ''
  };
  edit: boolean = false;

  constructor(private activatedRoute: ActivatedRoute,private router: Router, private userService: UsersService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsersId(id: number){
    localStorage.setItem("userId", JSON.stringify(id));
    //console.log("userId "+ this.userId)
  }
  
  getUsers(){
    this.userService.getAll().subscribe(
      res => {
        this.users = res;
        //console.log(res)
      },
      err => console.log(err)
    );
  }

  deleteUser(id: string){
    this.userService.deleteUser(id).subscribe(
      res =>{
        //console.log(res);
        this.getUsers();
      },
      err => console.log(err)
    )
  }

}
