import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { DisableAliasBttnService } from '../disable-alias-bttn.service'
import { findStringInNode } from '../../testing/find-string-in-node';
import { MetaRatingComponent } from '../components/meta-rating.component';

let comp: MetaRatingComponent;
let fixture: ComponentFixture<MetaRatingComponent>;
let debugProfileButton: DebugElement;
let HTMLnode: HTMLElement;
let profile: Element;
let dabService: DisableAliasBttnService;
let spy: jasmine.Spy;

const fakeMethod = "fakeMethod";

describe('MetaRatingComponent', () => {
  let serviceStub = {};

  beforeEach(async() => {
    TestBed.configureTestingModule({
      declarations: [ MetaRatingComponent ],
      providers: [ DisableAliasBttnService
    ]
    });
    spy = spyOn(dabService, 'relayMessage')
      .and.returnValue(Promise.resolve(fakeMethod));
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MetaRatingComponent);
    dabService = fixture.debugElement.injector.get(DisableAliasBttnService);

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

describe("Alias Button de-activation", () => {
  it("Counter should increment on each click", () => {
    comp.messageIn();
    fixture.detectChanges();
    comp.messageIn();
    fixture.detectChanges();
    expect(comp.counter).toEqual(3)
  });
});

});
