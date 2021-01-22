import { MatCardModule } from '@angular/material/card';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PodcastsRoutingModule } from './podcasts-routing.module';
import { PodcastsComponent } from './podcasts.component';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [PodcastsComponent],
  imports: [
    CommonModule,
    PodcastsRoutingModule,
    MatCardModule,
    MatToolbarModule
  ]
})
export class PodcastsModule {}
