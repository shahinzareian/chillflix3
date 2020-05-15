import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../shared/models/movie';

@Component({
  selector: 'app-youtube-play',
  templateUrl: './youtube-play.component.html',
  styleUrls: ['./youtube-play.component.css']
})
export class YoutubePlayComponent implements OnInit {
  
  private videoId: string;
  public movieUrl: string;
  constructor(private readonly activatedRoute: ActivatedRoute) {}
  ngOnInit(): void {
  this.videoId = this.activatedRoute.snapshot.paramMap.get('id');
  this.movieUrl = `https://www.youtube.com/embed/${this.videoId}?
  rel=0&autoplay=1`;
  }
}
