import { Component, OnInit } from "@angular/core";
import { closeAsyncLoader, showAsyncLoader } from "src/app/shared/utils/helper";
import { PostService } from "../../shared/services/post.services";
import { IPostDetail } from "../home.model";

@Component({
    template: `
        <main id="content" class="content" role="main">
            <div class="wraps">
                <each-post [eachPostList] = "posts"></each-post>
                <user-profile></user-profile>
            </div>
        </main>
    `,
    styles: [`
        main {
            margin-top: 5%;
        }
    `]
})

export class AllPostComponent implements OnInit {

    posts: Array<IPostDetail> = []

    constructor(private postsService: PostService) {}

    ngOnInit(): void {
        this.getAllPosts()
    }
    
    getAllPosts(){
        showAsyncLoader('Processing, please wait...')
        this.postsService.getPosts().subscribe(res => {
          console.log(res)
          this.posts = res as any
          this.posts.sort((a, b) => {
            let pa: any = new Date(a.date), pb: any = new Date(b.date)
            return pb - pa
          })
        }).add(closeAsyncLoader())
    }
}