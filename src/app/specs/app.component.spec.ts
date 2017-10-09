import { ComponentFixture, TestBed, async } from "@angular/core/testing";

import { DebugElement, NO_ERRORS_SCHEMA } from "@angular/core";
import { By } from "@angular/platform-browser";

import { findStringInNode } from "../../testing/find-string-in-node";
import { RouterLinkStubDirective } from "../../testing/router-stubs";
import { RouterOutletStubComponent } from "../../testing/router-stubs";
import { click } from "../../testing/clicker-left";

import { AppComponent } from "../components/app.component";
import { NavResetService } from "../services/nav-reset.service";

describe("AppComponent", () => {

  let comp: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let DOMElement: DebugElement;
  let linkDes: DebugElement[];
  let links: RouterLinkStubDirective[];
  let spy: jasmine.Spy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        RouterLinkStubDirective,
        RouterOutletStubComponent
      ],
      schemas: [ NO_ERRORS_SCHEMA ],
      providers: [ NavResetService ]

    }).compileComponents()
    .then(() => {
      fixture = TestBed.createComponent(AppComponent);
      comp = fixture.componentInstance;
      DOMElement = fixture.nativeElement.children;
      fixture.detectChanges();

      // find DebugElements that have an attached RouterLinkStubDirective
      linkDes = fixture.debugElement
        .queryAll(By.directive(RouterLinkStubDirective));

      // get the attached link directive instances using the DebugElement injectors
      links = linkDes
        .map(de => de.injector.get(RouterLinkStubDirective) as RouterLinkStubDirective);
      });
  }));

  describe("Landing Page", () => {

    it("should render title in a h1 tag", () => {
      let nodeTxt = DOMElement[0].querySelectorAll("h1");
      expect(findStringInNode(nodeTxt[0], "META-HUMAN &nbsp;DATABASE")).toBe(true);
    });

    it("should have one link that routes Home", () => {
      expect(links.length).toBe(1, "should have 1 link");
      expect(links[0].linkParams).toEqual(["/"], "link should go to Landing Page");
    });

  });

    describe("Service Spy", () => {

      it("should be called", ()=> {
        spy = spyOn(NavResetService.prototype, "relayNavMessage");
        expect(spy).not.toHaveBeenCalled();
        comp.messageToService();
        expect(spy).toHaveBeenCalled();
      });

    });

});
