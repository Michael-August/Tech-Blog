import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-each-post',
  templateUrl: './each-post.component.html',
  styleUrls: ['./each-post.component.css']
})
export class EachPostComponent implements OnInit {

  @Input() postThumbnail 

  constructor() { }

  ngOnInit(): void {
  }

}
