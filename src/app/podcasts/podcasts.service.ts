import { PodcastsComponent } from './podcasts.component';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PodcastsService {
  constructor(private httpClient: HttpClient) {}

  getAllPodcasts(): Observable<PodcastsComponent> {
    const podcastUrl = 'http://localhost:3000/podcasts';
    return this.httpClient.get<PodcastsComponent>(podcastUrl); // return an observable
  }
}
