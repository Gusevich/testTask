import {Component, OnInit} from '@angular/core';
import {PhotosService} from "../../services/photos.service";
import {Photo} from "../../model/models";

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  photos: Photo[] = [];
  constructor(private photosService: PhotosService) {
  }

  ngOnInit(): void {
    this.getPhoto();
  }

  getPhoto() {
    this.photosService.getPhotos().subscribe((data) => {
      console.log(data);
      this.photos = data;
    });
  }
  isValid: boolean = false;
  check(valid: boolean){
    this.isValid = valid;
  }
  isStored(photo: Photo) {
    let changedPhotos = localStorage.getItem('changePhotos');
    let changedPhotosArray = [];
    if (changedPhotos) {
      changedPhotosArray = JSON.parse(changedPhotos);
    }
    return changedPhotosArray.some((el: Photo) => el.id === photo.id)
  }

  storePhoto(photo: Photo) {
    let changedPhotos = localStorage.getItem('changePhotos');
    let changedPhotosArray = [];
    if (changedPhotos) {
      changedPhotosArray = JSON.parse(changedPhotos);
    }
    const found = changedPhotosArray.some((el: Photo) => el.id === photo.id);

    if (!found) {
      changedPhotosArray.push(photo);
    }

    localStorage.setItem('changePhotos', JSON.stringify(changedPhotosArray));
    this.check(true);
  }

  removePhoto(photo: Photo) {
    if (photo !== undefined) {

      const changedPhotos = JSON.parse(<string>localStorage.getItem('changePhotos')) || [];
      changedPhotos.forEach((value: Photo,index: number)=>{
        if (value.id == photo.id) {
          changedPhotos.splice(index,1);
        }
      });
      localStorage.setItem('changePhotos', JSON.stringify(changedPhotos));
    }
    this.check(false);
  }
}
