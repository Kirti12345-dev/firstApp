import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor() { }

  data=[
    {
      itemImageUrl: '../assets/images/image1.jpg',
      title:'heading1',
      para: 'Lorem Ipsum is simply '
    },
    {
      itemImageUrl: '../assets/images/image2.jpg',
      title:'heading2',
      para: 'Lorem Ipsum is simply '
    },
    {
      itemImageUrl: '../assets/images/image3.jpg',
      title:'heading3',
      para: 'Lorem Ipsum is simply '
    },
    {
      itemImageUrl: '../assets/images/image1.jpg',
      title:'heading1',
      para: 'Lorem Ipsum is simply '
    },
    {
      itemImageUrl: '../assets/images/image2.jpg',
      title:'heading2',
      para: 'Lorem Ipsum is simply '
    },
    {
      itemImageUrl: '../assets/images/image3.jpg',
      title:'heading3',
      para: 'Lorem Ipsum is simply '
    }
  ]

  ngOnInit(): void {
  }

}
