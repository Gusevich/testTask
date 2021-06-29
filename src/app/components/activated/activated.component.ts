import { Component, OnInit } from '@angular/core';
import {Photo, Post, User} from "../../model/models";

@Component({
  selector: 'app-activated',
  templateUrl: './activated.component.html',
  styleUrls: ['./activated.component.css']
})
export class ActivatedComponent implements OnInit {
  photos: Photo[] = [];
  users: User[] = [];
  posts: Post[] = [];
  constructor() {
    this.getPhotoItems();
    this.getUserItems();
    this.getPostItems();
  }

  ngOnInit(): void {
  }

  getPhotoItems() {
    let photosFromStorage = localStorage.getItem('changePhotos');
    if (photosFromStorage != null) {
      this.photos = JSON.parse(photosFromStorage);
    }
  }

  getUserItems() {
    let usersFromStorage = localStorage.getItem('changeUsers');
    if (usersFromStorage != null) {
      this.users = JSON.parse(usersFromStorage);
    }
  }

  getPostItems() {
    let postsFromStorage = localStorage.getItem('changePosts');
    if (postsFromStorage != null) {
      this.posts = JSON.parse(postsFromStorage);
    }
  }

}
