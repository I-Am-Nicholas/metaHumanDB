import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetaRatingComponent } from '../components/meta-rating.component';

describe('MetaRatingComponent', () => {
  let component: MetaRatingComponent;
  let fixture: ComponentFixture<MetaRatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetaRatingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetaRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
