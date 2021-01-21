import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllPodcastsComponent } from './view-all-podcasts.component';

describe('ViewAllPodcastsComponent', () => {
  let component: ViewAllPodcastsComponent;
  let fixture: ComponentFixture<ViewAllPodcastsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAllPodcastsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllPodcastsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
