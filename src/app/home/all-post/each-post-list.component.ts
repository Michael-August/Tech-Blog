import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'each-post',
  template: `
    <div class="container">
        <img src="assets/img/shadow.png" class="wrapshadow">
        <div class="row grid" >
            <div class="col-md-4 grid-item" *ngFor="let post of eachPostList">
                <article class="post">
                    <a [routerLink]="['/post-details/posts', post.id]">
                        <img class="main" [src]="post.img">
                    </a>
                    <div class="wrapgriditem">
                        <header class="post-header">
                            <h2 class="post-title"><a >{{ post.title }}</a></h2>
                        </header>
                        <section class="post-excerpt">
                            <p>{{ post.body }}</p>
                        </section>
                        <footer class="post-meta">
                            <img class="author-thumb" src="assets/img/gravatar.jpg" alt="David" nopin="nopin"/>
                            <a href="author.html">{{ post.author }}</a>
                            <time class="post-date" datetime="2016-12-18">{{ post.date }}</time>
                        </footer>
                    </div>
                </article>
            </div>
        </div>
    </div>
  `,

  styles: [
      `p {
        font-size: 1.49em;
    }
`]

})
export class EachPostListComponent implements OnInit {

  @Input() eachPostList = null

  constructor() { }

  ngOnInit(): void {
    console.log(this.eachPostList)
  }

}