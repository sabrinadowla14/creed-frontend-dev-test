import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewAllPodcastsComponent } from './view-all-podcasts/view-all-podcasts.component';
import { ViewPodcastsComponent } from './view-podcasts/view-podcasts.component';
import { LayoutPodcastModule } from './layout-podcast/layout-podcast.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [AppComponent, ViewAllPodcastsComponent, ViewPodcastsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutPodcastModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
