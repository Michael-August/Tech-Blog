import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/shared/services/post.services';
import { IPostDetail } from '../home.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  posts: Array<IPostDetail> = []

  constructor(private postsService: PostService) { }

  ngOnInit(): void {
    this.getAllPosts()
  }

  getAllPosts(){
    this.postsService.getPosts().subscribe(res => {
      console.log(res)
      this.posts = res as any
      this.posts.sort((a, b) => {
        let pa: any = new Date(a.date), pb: any = new Date(b.date)
        return pb - pa
      })
    })
  }

}
