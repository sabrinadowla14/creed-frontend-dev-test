import { Component, OnInit } from '@angular/core';
import { PodcastsService } from 'src/app/podcasts/podcasts.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  podcasts: any = [];
  title: string = 'Top 5 Web Design Podcasts';

  constructor(private podcastsService: PodcastsService) {}

  ngOnInit(): void {
    this.podcastsService.getAllPodcasts().subscribe(data => {
      this.podcasts = data.podcasts;
    });
  }
}
