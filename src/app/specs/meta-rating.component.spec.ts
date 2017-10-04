import { ComponentFixture, TestBed, tick, fakeAsync } from "@angular/core/testing";
import { DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";

import { DisableAliasBttnService } from "../disable-alias-bttn.service"
import { findStringInNode } from "../../testing/find-string-in-node";
import { MetaRatingComponent } from "../components/meta-rating.component";
import { click } from "../../testing/clicker-left";

let comp: MetaRatingComponent;
let fixture: ComponentFixture<MetaRatingComponent>;
let debugProfileButton: DebugElement;
let HTMLnode: HTMLElement;
let dabService: DisableAliasBttnService;
let serviceSpy: jasmine.Spy;
let profile: Array<Element>;

const fakeMethod = "fakeMethod";

describe("MetaRatingComponent", () => {

  beforeEach(async() => {

    TestBed.configureTestingModule({
      declarations: [ MetaRatingComponent ],
      providers: [ DisableAliasBttnService
    ]
    });

  });

  beforeEach(() => {

    fixture = TestBed.createComponent(MetaRatingComponent);
    dabService = fixture.debugElement.injector.get(DisableAliasBttnService);
    serviceSpy = spyOn(dabService, "relayMessage")//.and.returnValue(Promise.resolve(fakeMethod));

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
    profile = [].slice.call(HTMLnode.querySelectorAll("#profile-panel"));
    fixture.detectChanges();

  });


  describe("Profile Panel", () => {

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

    it("should not be visible in DOM", () => {
      let profile = HTMLnode.querySelectorAll("#encloser");
      expect(findStringInNode(profile[0], "profile-panel")).toBe(false);
    });

    it("should be visible in DOM after Profile button clicked", () => {
      let profile = HTMLnode.querySelectorAll("#encloser");
      debugProfileButton.triggerEventHandler("click", null);
      fixture.detectChanges();
      expect(profile.length).toEqual(1);
    });

    it("should contain a string", () => {
      let profile = HTMLnode.querySelectorAll("#encloser");
      debugProfileButton.triggerEventHandler("click", null);
      fixture.detectChanges();
      expect(profile[0].textContent).toContain(comp.chosenMeta.profile[0]);
    });

    it("should show name and alias", () => {
      let profile = HTMLnode.querySelectorAll("#encloser");
      comp.chosenMeta = testMeta;
      debugProfileButton.triggerEventHandler("click", null);
      fixture.detectChanges();
      expect(profile[0].textContent).toContain(comp.chosenMeta.name.toUpperCase());
      expect(profile[0].textContent).toContain(comp.chosenMeta.alias.toUpperCase());
    });

    describe("hidePanel function", () => {

      it("should set the hide property to true when toggle property is true", () => {
        comp.toggle = true;
        comp.hidePanel();
        expect(comp.hide).toBe(true);
      });

      it("should set the hide property to false", fakeAsync(() => {
        comp.toggle = false;
        comp.hidePanel();
        tick(5000);
        expect(comp.hide).toBe(false);
      }));

      it("should call the hidePanel function", () => {
        let spy = spyOn(comp, "hidePanel")
        debugProfileButton.triggerEventHandler("click", null);
        expect(spy).toHaveBeenCalled();
      });
    });

  });


  describe("Alias Button de-activation", () => {

    it("Service method call should follow Component method call", () => {
      expect(serviceSpy).not.toHaveBeenCalled();
      comp.messageIn();
      expect(serviceSpy).toHaveBeenCalled();
    });

    it("Profile button click should trigger a call to the Component's method", () => {
      let spy = spyOn(comp, "messageIn").and.callThrough();
      debugProfileButton.triggerEventHandler("click", null);
      fixture.detectChanges();
      expect(spy).toHaveBeenCalled();
    });

    it("A false argument should call the resetAliasBtn function", () => {
      let spy = spyOn(comp, "resetAliasBtn");
      comp.messageIn();
      expect(spy).toHaveBeenCalled();
    });

    it("A true argument should call the resetAliasBtn function", fakeAsync(() => {
      let spy = spyOn(comp, "resetAliasBtn");
      debugProfileButton.triggerEventHandler("click", null);
      tick(5000);
      comp.messageIn();
      expect(spy).not.toHaveBeenCalled();
    }));

    it("resetAlias should call service spy", () => {
      comp.resetAliasBtn();
      expect(serviceSpy).toHaveBeenCalledWith(false);
    });

  });

});
