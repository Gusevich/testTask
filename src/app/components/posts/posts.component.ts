import { Component, OnInit } from '@angular/core';
import {Photo, Post, User} from "../../model/models";
import {PostsService} from "../../services/posts.service";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: Post[] = [];
  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
    this.getPost();
  }
  getPost() {
    this.postsService.getPosts().subscribe((data) =>{
      console.log(data);
      this.posts = data;
    });
  }
  isValid: boolean = false;
  check(valid: boolean){
    this.isValid = valid;
  }
  isStored(post: Post) {
    const changePosts = localStorage.getItem('changePosts');
    let changePostsArr = [];
    if(changePosts) {
      changePostsArr = JSON.parse(changePosts);
    }
    return changePostsArr.some((el: Post) => el.id === post.id)
  }

  storePost(post: Post) {
    const changePosts = localStorage.getItem('changePosts');
    let changePostsArr = [];
    if(changePosts) {
      changePostsArr = JSON.parse(changePosts);
    }
    const found = changePostsArr.some((el: Post) => el.id === post.id)
    if (!found) {
      changePostsArr.push(post);
    }
    localStorage.setItem('changePosts', JSON.stringify(changePostsArr))
    this.check(true);
  }

  removePost(post: Post) {
    if (post !== undefined) {

      const changePosts = JSON.parse(<string>localStorage.getItem('changePosts')) || [];
      changePosts.forEach((value: Post, index: number) => {
        if (value.id == post.id) {
          changePosts.splice(index, 1);
        }
      });
      localStorage.setItem('changePosts', JSON.stringify(changePosts));
    }
    this.check(false);
  }
}
