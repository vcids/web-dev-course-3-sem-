import { Album } from './model';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ALBUMS } from './fake-db';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  constructor(private client: HttpClient) { }

  getAlbums() {
    return this.client.get('https://jsonplaceholder.typicode.com/albums');
  }

  getAlbum(id: number){
    
    return this.client.get(`https://jsonplaceholder.typicode.com/albums/${id}`);
  }

  updateAlbum(album: Album) {
    return this.client.put(`https://jsonplaceholder.typicode.com/albums/${album.id}`, album);
  }

  deleteAlbum(id: number) {
    return this.client.delete(`https://jsonplaceholder.typicode.com/albums/${id}`);
  }

  addAlbum(album: Album) {
    return this.client.post(`https://jsonplaceholder.typicode.com/albums`, album);
  }

  getPhotos(id: number) {
    return this.client.get(`https://jsonplaceholder.typicode.com/albums/${id}/photos`);
  }

}
