import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { findStringInNode } from '../../testing/find-string-in-node';
import { MetaRatingComponent } from '../components/meta-rating.component';

let comp: MetaRatingComponent;
let fixture: ComponentFixture<MetaRatingComponent>;
let debugProfileButton: DebugElement;
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
    let testMeta = (
      {
      id: 1,
        name: "Thor",
         logo: "Mjolnir",
          alias: "God of Thunder",
           profile: ["Meta Profile Text"],
           headshotsFront: "assets/headshotsFront/thor.jpg",
            headshotsBack: "assets/headshotsBack/thor.jpg",
             level: []
    });

    comp = fixture.componentInstance;
    comp.chosenMeta = testMeta;
    debugProfileButton = fixture.debugElement.query(By.css("#profile-btn"));
    HTMLnode = fixture.nativeElement;
    profile = HTMLnode.querySelector('#profile-panel');
    fixture.detectChanges();
  });


  it("Profile panel should not be visible in DOM", () => {
    expect(findStringInNode(profile, 'hidden')).toBe(true);
  });

  it("Profile panel should be visible in DOM after ratings clicked", () => {
    debugProfileButton.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(findStringInNode(profile, 'hidden')).toBe(false);
  });

  it("Profile panel should not be visible in DOM after ratings clicked twice", () => {
    debugProfileButton.triggerEventHandler('click', null);
    fixture.detectChanges();
    debugProfileButton.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(findStringInNode(profile, 'hidden')).toBe(true);
  });

  it("Profile panel should contain a string", () => {
    debugProfileButton.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(profile.textContent).toContain(comp.chosenMeta.profile[0]);
  });

  it("Profile panel should show name and alias", () => {
    expect(profile.textContent).toContain(comp.chosenMeta.name.toUpperCase());
    expect(profile.textContent).toContain(comp.chosenMeta.alias.toUpperCase());
  });

});
