import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumService } from '../album.service';
import { HttpClientModule } from '@angular/common/http';



@Component({
  selector: 'app-album',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  albumList: any[] = [];

  constructor(private albumService: AlbumService) {}

  ngOnInit(): void {
    this.albumService.getAlbums().subscribe((data) => {
      this.albumList = data.map(item => ({
        id: item.id,
        title: item.title,
        image: `https://picsum.photos/300/200?random=${item.id}`,
        userId: item.userId
      }));
    });
  }
}