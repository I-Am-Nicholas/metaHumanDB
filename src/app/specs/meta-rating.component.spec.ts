import { ComponentFixture, TestBed } from "@angular/core/testing";
import { DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";

import { DisableAliasBttnService } from "../disable-alias-bttn.service"
import { findStringInNode } from "../../testing/find-string-in-node";
import { MetaRatingComponent } from "../components/meta-rating.component";

let comp: MetaRatingComponent;
let fixture: ComponentFixture<MetaRatingComponent>;
let debugProfileButton: DebugElement;
let HTMLnode: HTMLElement;
let profile: Element;
let dabService: DisableAliasBttnService;
let serviceSpy: jasmine.Spy;

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
    profile = HTMLnode.querySelector("#profile-panel");
    fixture.detectChanges();

  });


  describe("Profile Panel", () => {

    it("should not be visible in DOM", () => {
      expect(findStringInNode(profile, "hidden")).toBe(true);
    });

    it("should be visible in DOM after Profile button clicked", () => {
      debugProfileButton.triggerEventHandler("click", null);
      fixture.detectChanges();
      expect(findStringInNode(profile, "hidden")).toBe(false);
    });

    it("should not be visible in DOM after Profile button clicked twice", () => {
      debugProfileButton.triggerEventHandler("click", null);
      fixture.detectChanges();
      debugProfileButton.triggerEventHandler("click", null);
      fixture.detectChanges();
      expect(findStringInNode(profile, "hidden")).toBe(true);
    });

    it("should contain a string", () => {
      debugProfileButton.triggerEventHandler("click", null);
      fixture.detectChanges();
      expect(profile.textContent).toContain(comp.chosenMeta.profile[0]);
    });

    it("should show name and alias", () => {
      expect(profile.textContent).toContain(comp.chosenMeta.name.toUpperCase());
      expect(profile.textContent).toContain(comp.chosenMeta.alias.toUpperCase());
    });

    describe("hidePanel", () => {

      it("hide property should have false value as default", () => {
        expect(comp.hide).toBe(false);
      });

      it("hide property should be true when toggle property is true", () => {
        comp.toggle = true;
        comp.hidePanel();
        expect(comp.hide).toBe(true);
      });

    });

  });


  describe("Alias Button de-activation", () => {

    it("counter should increment on each click", () => {
      comp.messageIn();
      fixture.detectChanges();
      comp.messageIn();
      fixture.detectChanges();
      expect(comp.toggler).toEqual(3)
    });

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

    it("A true argument should call the resetAlias function", () => {
      let spy = spyOn(comp, "resetAliasBtn");
      comp.messageIn();
      expect(spy).not.toHaveBeenCalled();
      comp.messageIn();
      expect(spy).toHaveBeenCalled();
    });

    it("resetAlias should call service spy", () => {
      comp.resetAliasBtn();
      expect(serviceSpy).toHaveBeenCalledWith(false);
    });

  });

});
