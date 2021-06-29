import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {UsersComponent} from "./components/users/users.component";
import {PhotosComponent} from "./components/photos/photos.component";
import {PostsComponent} from "./components/posts/posts.component";
import {ActivatedComponent} from "./components/activated/activated.component";

const appRoutes: Routes = [
  {path: 'photos', component: PhotosComponent},
  {path: 'users', component: UsersComponent},
  {path: 'posts', component: PostsComponent},
  {path: 'activated', component: ActivatedComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes,
    )
  ]
})
export class AppRoutingModule {
}
