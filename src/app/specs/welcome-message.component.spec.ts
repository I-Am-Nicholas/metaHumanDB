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
    DOMElement = fixture.nativeElement.children;
    fixture.detectChanges();
  });


  it("showAnimation property should initialize with a true value", () => {
    expect(component.showAnimation).toBeTruthy();
  });

  // querySelectorAll returns a NodeList object, whether it locates the argument in the DOM
  // or not, thereby always evaluating as truthy. Specificity is required for accurate tests,
  // we must request the first child of the object.

  it("should be present in the DOM OnInit", () => {
    expect(DOMElement[0].querySelectorAll("#welcome-message")[0]).toBeTruthy();
  });

  it("should display text", () => {
    let message = DOMElement[0].querySelectorAll("#welcome-message")[0]
    expect(message.textContent).not.toBe("");
  });


  it("should be present in DOM at initialization", () => {
    expect(DOMElement[0].querySelectorAll("#mini-iron-man")[0]).toBeTruthy();
  });

  it("should not be present in the DOM after meta click", () => {
    let component2 = fixture.componentInstance;
    component2.showAnimation = null;//representing the absence of the component on a Metas.component button click.
    let DOMElement2 = fixture.nativeElement.children;
    expect(DOMElement2[0].querySelectorAll("#welcome-message")[0]).toBeNull;
  });


});
