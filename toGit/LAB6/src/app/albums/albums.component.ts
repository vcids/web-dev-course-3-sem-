import { AlbumsService } from './../albums.service';
import { ALBUMS } from './../fake-db';
import { Album } from './../model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  albums;
  loaded!: boolean;
  newAlbum: string;

  constructor(private serv: AlbumsService) {
    this.newAlbum = '';
   }

  ngOnInit(): void {
    this.getAlbums();
  }

  getAlbums() {
    this.loaded = false;
    this.serv.getAlbums().subscribe((albums) => {
      this.albums = albums;
      this.loaded = true;
    })
  }

  deleteAlbum(id: number) {
    this.albums = this.albums.filter((x)=>x.id !== id);
    this.serv.deleteAlbum(id).subscribe(()=> {
      console.log('deleted tf', id);
    })
  }

  addAlbum() {
    let post = {
      title: this.newAlbum
    };
    this.loaded = false;
    this.serv.addAlbum(post as Album).subscribe((post)=>{
      this.albums.unshift(post);
      this.newAlbum='';
      this.loaded = true;
    });
  }


}
