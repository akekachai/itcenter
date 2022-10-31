import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { EventBusService } from 'src/app/shared/event-bus.service';
@Component({
  selector: 'app-getbyperson',
  templateUrl: './getbyperson.component.html',
  styleUrls: ['./getbyperson.component.scss']
})
export class GetbypersonComponent implements OnInit {

  content?: string;

  constructor(private userService: UserService, private eventBusService: EventBusService) { }
  ngOnInit(): void {
    this.userService.getUserBoard().subscribe({
      next: data => {
        this.content = data[0].fullName;
      },
      error: err => {
        console.log('error user');
        if (err.error) {
          try {
            const res = JSON.parse(err.error);
            this.content = res.message;
          } catch {
            this.content = `Error with status: ${err.status} - ${err.statusText}`;
          }
        } else {
          this.content = `Error with status: ${err.status}`;
        }
      }
    });
  }
}
