import { AlbumsService } from './../albums.service';
import { ALBUMS } from './../fake-db';
import { Album } from './../model';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit {
  album;
  loaded!: boolean;

  constructor(private router: ActivatedRoute,
    private location: Location,
    private serv: AlbumsService) { }

  ngOnInit(): void {
    this.getAlbum();
  }
  goBack() {
    this.location.back();
  }

  updateData() {
    this.loaded = false;
    this.serv.updateAlbum(this.album).subscribe((album)=>{
      console.log(album);
      this.loaded = true;
    })
  }

  getAlbum() {
    this.router.paramMap.subscribe((params) => {
      const id = Number(params.get('id'));
      this.loaded = false;
      this.serv.getAlbum(id).subscribe((album) => {
        this.album = album;
        this.loaded = true;
      })
    })
  }

}
