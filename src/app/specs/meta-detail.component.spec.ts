import { NO_ERRORS_SCHEMA, DebugElement } from "@angular/core";
import { ComponentFixture, TestBed, async } from "@angular/core/testing";
import { HttpModule } from "@angular/http";

//ROUTER LIBRARIES
import { RouterTestingModule } from "@angular/router/testing";
import { ActivatedRouteStub } from "../../testing/router-stubs";
import { ActivatedRoute } from "@angular/router";

import { Observable } from "rxjs/Rx";

//SERVICES
import { MetaService } from "../meta-service";
import { DisableAliasBttnService } from "../disable-alias-bttn.service"

import { MetaDetailComponent } from "../components/meta-detail.component"
import { Meta } from "../meta"
import { click } from "../../testing/clicker-left"
import { findStringInNode } from "../../testing/find-string-in-node";


describe("MetaDetailComponent", () => {

  let fixture: ComponentFixture<MetaDetailComponent>;
  let comp: MetaDetailComponent;
  let DOMElement: DebugElement;
  let testMeta: Meta;
  let debugAliasButton: DebugElement;
  let flipperClass: {};
  let metaService: MetaService;
  let serviceSpy: jasmine.Spy;

  var activatedRouteStub = new ActivatedRouteStub();


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [ NO_ERRORS_SCHEMA ],
      declarations: [ MetaDetailComponent ],
      imports: [ HttpModule, RouterTestingModule ],
      providers: [
        MetaService, DisableAliasBttnService,
        { provide: ActivatedRoute, useValue: activatedRouteStub }
      ]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetaDetailComponent);
    metaService = fixture.debugElement.injector.get(MetaService);
    serviceSpy = spyOn(metaService, "getMeta").and.returnValue(Promise.resolve());
    DOMElement = fixture.nativeElement.children;

    testMeta = (
      {
      id: 9000,
        name: "Thor",
         logo: "Mjolnir",
          alias: "God of Thunder",
           profile: [],
           weaponry: [
             "Fake Weaponry."
           ],
           headshotsFront: "",
            headshotsBack: "",
             level: []
    });

    comp = fixture.componentInstance;
    comp.clickedMeta = testMeta;
    fixture.detectChanges();
    flipperClass = DOMElement[0].querySelectorAll(".flipper");
  });


  describe("ngOnInit", () => {

    it("should set the component route to that of the mocked route", () => {
      activatedRouteStub.testParamMap = {id: testMeta.id};
      expect(serviceSpy).toHaveBeenCalledWith(testMeta.id);
    });

    it("should call the Service's getMeta method", () => {
      expect(serviceSpy).toHaveBeenCalled();
    });

  });


  describe("Image", () => {

    it("back should not be visible", () => {
      expect(findStringInNode(flipperClass[0], "showAlias")).toBe(false);
    });

    it("back should be visible", () => {
      click(DOMElement[0].querySelector("#alias-btn"));
      fixture.detectChanges();
      expect(findStringInNode(flipperClass[0], "showAlias")).toBe(true);
    });

  });


  describe("Details", () => {

    it("should display the correct meta's name and alias", () => {
      let testName = testMeta.name.toUpperCase();
      let testAlias = testMeta.alias.toUpperCase();
      expect(DOMElement[0].textContent).toContain(testName);
      expect(DOMElement[0].textContent).toContain(testAlias);
    });

    it("should not display logo details", () => {
      let testLogo = testMeta.logo;
      expect(DOMElement[0].textContent).not.toContain(testLogo);
    });

    it("should display the meta's image", () => {
      expect(DOMElement[0].querySelector("#headshot img")).toBeTruthy();
    });

    it("should provide alt text for screenreaders", () => {
      var x = DOMElement[0].querySelector("#back-div");
      expect(x.innerHTML).toContain("Thor image");
    });

  });


  describe("Weaponry", () => {

    it("should show weaponry div", () => {
      expect(DOMElement[0].querySelector("#weaponry")).toBeTruthy();
    });

    it("the DOM should display the mocked weaponry", () => {
      let HTMLnode = DOMElement[0].querySelectorAll("#weaponry li");
      expect(findStringInNode(HTMLnode[0], testMeta.weaponry)).toBe(true);
    });

  });


  describe("Alias Button", () => {

    it("should be displayed", () => {
      expect(DOMElement[0].querySelector("#alias-btn")).toBeTruthy();
    });

    it("should not be masked", () => {
      comp.message = false;
      fixture.detectChanges();
      expect(DOMElement[0].querySelector(".bttn-mask")).toBeNull();
    });

    it("should be masked", () => {
      comp.message = true;
      fixture.detectChanges();
      expect(DOMElement[0].querySelector(".bttn-mask")).toBeTruthy();
    });

  });

});
