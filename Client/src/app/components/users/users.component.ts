import { Component, OnInit, HostBinding } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { User} from '../../models/user';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  @HostBinding('class') classes = 'row';
  
  user: User = {
    Id: 0,
    Name: ''
  };

   id;

  constructor(private router: Router, private userService: UsersService, private activatedRoute: ActivatedRoute,) { }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    //console.log(params);
    this.id = params.id;
  }

  updateUser(){
    this.userService.updateUser(this.id, this.user).subscribe(
      res => {
        console.log(res);
      },
      err => console.log(err)
    )
    this.router.navigate(['/users'])
  }

}
