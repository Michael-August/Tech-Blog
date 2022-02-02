import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/shared/services/post.services';
import { IComments, IPostDetail } from '../../home/home.model';
import { CommentComponent } from '../comments/comment.component';

@Component({
  selector: 'app-post-body',
  templateUrl: './post-body.component.html',
  styleUrls: ['./post-body.component.css']
})
export class PostBodyComponent implements OnInit {

  postDetail: IPostDetail = null
  postComment
  comments: IComments[] = []
  @ViewChild(CommentComponent) commentComponent: CommentComponent

  constructor(private postService: PostService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.postService.getPostById(this.route.snapshot.params['id']).subscribe(res => {
      this.postDetail = res
      console.log(this.postDetail.comments)

      this.attarchCommentToPost()
    })
  }

  attarchCommentToPost() {
    this.postService.getComments().subscribe(res => {
      console.log(res)
      this.comments = res as any
      console.log(this.postDetail)
      this.postComment = this.comments.filter(c => {
        return c.postId === this.postDetail.id
      })
      console.log(this.postComment)
      if(this.postDetail.comments){
        this.postDetail.comments = [...this.postComment]
        console.log(this.postDetail.comments)
      } else {
        this.postDetail.comments = [...this.postComment]
        console.log(this.postDetail.comments)
      }
      })
  }

    

  addComment(newComment) {
    this.postService.createComments(newComment).subscribe(res => {
      this.comments.unshift(newComment)
      this.attarchCommentToPost()
      this.commentComponent.commentForm.nativeElement.value = ''
    })
      
  }

}
