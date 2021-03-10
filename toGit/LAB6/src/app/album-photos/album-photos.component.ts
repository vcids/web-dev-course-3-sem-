import { AlbumsService } from './../albums.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Photo } from '../model';
import {Location} from '@angular/common';

@Component({
  selector: 'app-album-photos',
  templateUrl: './album-photos.component.html',
  styleUrls: ['./album-photos.component.css']
})
export class AlbumPhotosComponent implements OnInit {
  album;
  loaded!: boolean;
  photos;

  constructor(private router: ActivatedRoute,
              private serv: AlbumsService,
              private location: Location) {
               }

  ngOnInit(): void {
    this.getAlbum();
    
  }

  getAlbum() {
    this.router.paramMap.subscribe((params)=>{
      const id = Number(params.get('id'));
      this.loaded = false;
      this.serv.getAlbum(id).subscribe((album)=> {
        this.album = album;
        this.loaded = true;
        console.log(this.album);
        this.getPhotos();
    })})
    
  }

  goBack() {
    this.location.back();
  }

  getPhotos() {
      this.serv.getPhotos(this.album.id).subscribe((photos)=> {
        this.photos = photos;
      })
  }

}
