import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IPostDetail } from 'src/app/home/home.model';
import { PostService } from 'src/app/shared/services/post.services';

@Component({
  selector: 'app-admin-posts',
  templateUrl: './admin-posts.component.html',
  styleUrls: ['./admin-posts.component.css']
})
export class AdminPostsComponent implements OnInit {

  posts: IPostDetail[] = []
  isCreate: boolean = true

  postForm: FormGroup

  postToolbar = [
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    ["bold", "italic", "underline", "strike"], // toggled buttons
    ["blockquote", "code-block"],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ size: ["small", false, "large", "huge"] }], // custom dropdown
    [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
    ["link", "image"], // links,
    [{ color: [] }, { background: [] }], // dropdown with defaults from theme
    [{ font: [] }],
    ["clean"],
  ];

  constructor(private postSrv: PostService) { }

  ngOnInit(): void {
    this.postForm = new FormGroup({
      title: new FormControl('', Validators.required),
      img: new FormControl('', Validators.required),
      category: new FormControl('', Validators.required),
      author: new FormControl('', Validators.required),
      body: new FormControl('', [Validators.required])
    })
    this.getPosts()
  }

  getPosts() {
    this.postSrv.getPosts().subscribe(res => {
      this.posts = res as any
    })
  }

  submit() {

  }
}
