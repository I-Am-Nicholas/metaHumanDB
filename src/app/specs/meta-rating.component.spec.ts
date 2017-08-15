import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Meta } from "../meta";

import { MetaRatingComponent } from '../components/meta-rating.component';

let comp: MetaRatingComponent;
let fixture: ComponentFixture<MetaRatingComponent>;
let testMeta: Meta;

describe('MetaRatingComponent', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ MetaRatingComponent ]
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MetaRatingComponent);

    comp = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(comp).toBeTruthy();
  });


});
