import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { DebugElement} from "@angular/core";

import { WelcomeMessageComponent } from "../components/welcome-message.component";

describe("WelcomeMessageComponent", () => {
  let component: WelcomeMessageComponent;
  let fixture: ComponentFixture<WelcomeMessageComponent>;
  let DOMElement:  DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WelcomeMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeMessageComponent);
    component = fixture.componentInstance;
    component.showAnimation = true;
    DOMElement = fixture.nativeElement.children;
    fixture.detectChanges();
  });


  it("should initialize with a false value", () => {
    component.showAnimation = false; //counters the showAnimation setter above, resetting the property to its original initialized state.
    expect(component.showAnimation).toBeFalsy();
  });

  describe("DOM", () => {

    // querySelectorAll returns a NodeList object, whether it locates the argument in the DOM
    // or not, thereby always evaluating as truthy. Specificity is required for accurate tests,
    // we must request the first child of the object.

    it("should be present in the DOM", () => {
      expect(DOMElement[0].querySelectorAll("#welcome-message")[0]).toBeTruthy();
    });

    it("should display text", () => {
      let message = DOMElement[0].querySelectorAll("#welcome-message")[0]
      expect(message.textContent).not.toBe("");
    });


    it("should be present in DOM at initialization", ()=> {
      expect(DOMElement[0].querySelectorAll("#mini-iron-man")[0]).toBeTruthy();
    });

  });

});
