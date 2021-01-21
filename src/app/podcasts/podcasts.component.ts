import { Component, OnInit } from '@angular/core';

import { any } from 'prop-types';
import { PodcastsService } from './podcasts.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-podcasts',
  templateUrl: './podcasts.component.html',
  styleUrls: ['./podcasts.component.scss']
})
export class PodcastsComponent implements OnInit {
  podcasts: any = [];
  podcastsData: any = [];

  constructor(public podcastsService: PodcastsService) {}
  ngOnInit(): void {
    this.podcastsService.getAllPodcasts().subscribe(data => {
      this.podcasts = data.podcasts;
      console.log(data.podcasts);
    });
  }
}
