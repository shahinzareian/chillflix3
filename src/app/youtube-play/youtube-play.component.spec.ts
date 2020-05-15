import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutubePlayComponent } from './youtube-play.component';

describe('YoutubePlayComponent', () => {
  let component: YoutubePlayComponent;
  let fixture: ComponentFixture<YoutubePlayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YoutubePlayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YoutubePlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
