import { Component, OnInit } from '@angular/core';
import { PodcastsService } from 'src/app/podcasts/podcasts.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  podcasts: any = [];
  counter = 0;

  constructor(public podcastsService: PodcastsService) {}

  ngOnInit(): void {
    this.podcastsService.getAllPodcasts().subscribe(data => {
      this.podcasts = data.podcasts;
      console.log(data.podcasts);
    });
  }

  addCounter(e: number) {
    this.counter += 1;
  }
}
