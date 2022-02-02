import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { IUser } from "src/app/auth-area/auth-area.model";
import { IComments, IPostDetail } from "src/app/home/home.model";
import { AuthAreaService } from "src/app/shared/services/auth-area.service";
import { PostService } from "../../shared/services/post.services";

@Component({
    selector: "comment",
    templateUrl: './comments.component.html',
    styles: [`p { font-size: 17px; font-weight: 600} 
        input { padding: 14px; margin-left: -15%; width: 70%; border-radius: 8px; font-size: 14px}
        .comment-img { width: 8%; clip-path: circle(); height: 20% }
        .loggedUser { clip-path: circle(); width: 24%; }
        .write-ups { margin-left: 1.5em }
        .comment { margin-top: -10px; font-size: 17px; color: gray; }
        .misc p { font-size: 14px; color: gray; margin-right: 10px; cursor: pointer; }
        .card-body { width: 100%; }
        .replies { margin-left: 20px; }
    `]
})

export class CommentComponent implements OnInit{

    singlePost: IPostDetail = null
    loggedInUser: IUser = null

    @Input() comments: Array<IComments> = []
    @Output() newComment = new EventEmitter()
    @ViewChild('newComment') commentForm: ElementRef

    constructor(private postSrv: PostService, private route: ActivatedRoute, private authSrv: AuthAreaService) {  }

    ngOnInit(): void {
        this.comments
        this.postSrv.getPostById(this.route.snapshot.params['id']).subscribe(res => {
            this.singlePost = res
        })
        this.getLoggedInUser()
    }

    getLoggedInUser() {
        let user = localStorage.getItem('logedIn')
        let parsed = JSON.parse(user)
        this.authSrv.getSignedUpUsers().subscribe(res => {
            let allUsers: IUser[] = res as any
            console.log(allUsers)
            this.loggedInUser = allUsers.find(u => {
                return u.email === parsed.email && u.password === parsed.password
            })
            console.log(this.loggedInUser)
        })
    }

    addNewComment(newComment) {
        const comment = {
            postId: this.singlePost.id,
            userName: `${this.loggedInUser.firstName + ' ' + this.loggedInUser.lastName}`,
            comment: newComment,
            profilePics: `${this.loggedInUser.img}`,
        }
        this.newComment.emit(comment)
    }

    getNumberOfComments(){
        return this.comments?.length
    }
}