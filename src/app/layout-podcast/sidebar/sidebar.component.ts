import {
  Component,
  OnInit,
  ChangeDetectorRef,
  AfterViewInit,
  AfterViewChecked
} from '@angular/core';
import { PodcastsService } from 'src/app/podcasts/podcasts.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  podcasts: any = [];
  counter: number = 0;
  podId: boolean = false;

  constructor(
    public podcastsService: PodcastsService,
    private cdr: ChangeDetectorRef
  ) {
    this.counter = this.podcastsService.counter;
  }

  ngOnInit() {
    this.podcastsService.getAllPodcasts().subscribe(data => {
      this.podcasts = data.podcasts;
      console.log('This is from sidebar' + this.podcasts[0].id);
      this.counter = this.counter + 1;
    });
  }
}
