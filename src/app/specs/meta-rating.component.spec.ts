import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { Meta } from "../meta";

import { MetaRatingComponent } from '../components/meta-rating.component';

describe('MetaRatingComponent', () => {
  let comp: MetaRatingComponent;
  let fixture: ComponentFixture<MetaRatingComponent>;
  let DOMElement: DebugElement;
  let testMeta: Meta;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetaRatingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {

    fixture = TestBed.createComponent(MetaRatingComponent);
    comp = fixture.componentInstance;
    DOMElement = fixture.nativeElement.children;
    fixture.detectChanges();

  });

  it('should be created', () => {
    expect(comp).toBeTruthy();
  });

  it('should prime the trans-panel for visibility on the DOM', () => {
    comp.onSelect();
    expect(comp.showTransPanel).toBe(true);
  });

});
