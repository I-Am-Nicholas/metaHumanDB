import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { findStringInNode } from '../../testing/find-string-in-node';
import { MetaRatingComponent } from '../components/meta-rating.component';

let comp: MetaRatingComponent;
let fixture: ComponentFixture<MetaRatingComponent>;
let debugProfile: DebugElement;
let HTMLnode: HTMLElement;
let profile: Element;

describe('MetaRatingComponent', () => {

  beforeEach(async() => {
    TestBed.configureTestingModule({
      declarations: [ MetaRatingComponent ]
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MetaRatingComponent);
    comp = fixture.componentInstance;
    debugProfile = fixture.debugElement.query(By.css(".bar-group"));
    HTMLnode = fixture.nativeElement;
    profile = HTMLnode.querySelector('#profile-panel');
    fixture.detectChanges();
  });


  it("Profile panel should not be visible in DOM", () => {
    expect(findStringInNode(profile, 'hidden')).toBe(true);
  });

  it("Profile panel should be visible in DOM after ratings clicked", () => {
    debugProfile.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(findStringInNode(profile, 'hidden')).toBe(false);
  });

  it("Profile panel should not be visible in DOM after ratings clicked twice", () => {
    debugProfile.triggerEventHandler('click', null);
    fixture.detectChanges();
    debugProfile.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(findStringInNode(profile, 'hidden')).toBe(true);
  });

  it("Profile panel should contain a string", () => {
    expect(profile.textContent).toContain(comp.showProfile);
  });


});
