import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewAllPodcastsComponent } from './view-all-podcasts/view-all-podcasts.component';
import { ViewPodcastsComponent } from './view-podcasts/view-podcasts.component';
import { LayoutPodcastModule } from './layout-podcast/layout-podcast.module';

@NgModule({
  declarations: [AppComponent, ViewAllPodcastsComponent, ViewPodcastsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutPodcastModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
