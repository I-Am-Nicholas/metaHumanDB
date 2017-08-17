import { ComponentFixture, ComponentFixtureAutoDetect, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { findStringInNode } from '../../testing/find-string-in-node';
import { MetaRatingComponent } from '../components/meta-rating.component';
import { Meta } from "../meta";

let comp: MetaRatingComponent;
let fixture: ComponentFixture<MetaRatingComponent>;
let debugProfile: DebugElement;
let elem: HTMLElement;

describe('MetaRatingComponent', () => {

  beforeEach(async() => {
    TestBed.configureTestingModule({
      declarations: [ MetaRatingComponent ]
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MetaRatingComponent);
    comp = fixture.componentInstance;
    debugProfile = fixture.debugElement.query(By.css("#profile-panel"));
    elem = debugProfile.nativeElement;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(comp).toBeTruthy();
  });

  it("Profile panel should not be visible in DOM", () => {
    expect(findStringInNode(elem, 'hidden')).toBe(true);
  });

  it("Profile panel should contain a string", () => {
    expect(elem.textContent).toContain(comp.showProfile);
  });


});
