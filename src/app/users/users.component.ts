import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  data=[
    {
      title:'heading1',
      para: 'Lorem Ipsum is simply '
    },
    {
      title:'heading2',
      para: 'Lorem Ipsum is simply '
    },
    {
      title:'heading3',
      para: 'Lorem Ipsum is simply '
    }
  ]

}
