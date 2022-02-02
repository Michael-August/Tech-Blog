import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/shared/services/post.services';
import { IPostDetail } from '../../home/home.model';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  post: IPostDetail = null

  constructor(private postSrv: PostService, private route: ActivatedRoute) {  }

  ngOnInit(): void {
    this.postSrv.getPostById(+this.route.snapshot.params['id']).subscribe(res => {
      this.post = res
    })
  }

  setImg(){
    return this.post.img
  }
    
}
