import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IComments, IPostDetail } from "src/app/home/home.model";

@Injectable({
    providedIn: "root"
})
export class PostService {

    posts: Array<IPostDetail> = []

    constructor(private http: HttpClient){

    }

    getPosts(): Observable<Array<IPostDetail[]>> {
        // REST: Representation of State Transfer
        return this.http.get<Array<IPostDetail[]>>('http://localhost:3000/posts')
    }

    getPostById(id: number):Observable<IPostDetail> {
        return this.http.get<IPostDetail>(`http://localhost:3000/posts/${id}`)
    }

    getComments(): Observable<Array<IComments[]>> {
        return this.http.get<Array<IComments[]>>(`http://localhost:3000/comments/`)
    }

    createComments(comment) {
        return this.http.post('http://localhost:3000/comments', comment)
    }
}
