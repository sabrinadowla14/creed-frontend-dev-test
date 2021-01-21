import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPodcastsComponent } from './view-podcasts.component';

describe('ViewPodcastsComponent', () => {
  let component: ViewPodcastsComponent;
  let fixture: ComponentFixture<ViewPodcastsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewPodcastsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPodcastsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
