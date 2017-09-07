import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA, DebugElement } from '@angular/core';
import { HttpModule } from "@angular/http";
import { ActivatedRoute, ParamMap }   from '@angular/router';
import { By } from '@angular/platform-browser';

import { ActivatedRouteStub } from "../../testing/router-stubs";
import { MetaDetailComponent } from '../components/meta-detail.component'
import { MetaService } from "../meta-service";
import { Meta } from '../meta'
import { click } from '../../testing/clicker-left'
import { findStringInNode } from '../../testing/find-string-in-node';

let fixture: ComponentFixture<MetaDetailComponent>;
let activatedRoute: ActivatedRouteStub;
let comp: MetaDetailComponent;
let DOMElement: DebugElement;
let testMeta: Meta;


describe('MetaDetailComponent', () => {

  beforeEach(async(() => {
    activatedRoute = new ActivatedRouteStub();

    TestBed.configureTestingModule({
      imports: [ HttpModule ],
      schemas: [ NO_ERRORS_SCHEMA ],
      declarations: [ MetaDetailComponent ],
      providers: [ MetaService,
        { provide: ActivatedRoute, useValue: activatedRoute },
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetaDetailComponent);
    DOMElement = fixture.nativeElement.children;

    testMeta = (
      {
      id: 1,
        name: "Thor",
         logo: "Mjolnir",
          alias: "God of Thunder",
           profile: [],
           metadata: [
             "Fake Metadata."
           ],
           headshotsFront: "assets/headshotsFront/thor.jpg",
            headshotsBack: "assets/headshotsBack/thor.jpg",
             level: []
    });

    comp = fixture.componentInstance;
    comp.clickedMeta = testMeta;
    fixture.detectChanges();
  });


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
    expect(DOMElement[0].querySelector('#headshot img')).toBeTruthy();
  });

  it("should display the Alias button", () => {
    expect(DOMElement[0].querySelector('#alias-btn')).toBeTruthy();
  });

  it('back of image should not initially be visible', () => {
    let flipperClass = DOMElement[0].querySelectorAll('.flipper');
    expect(findStringInNode(flipperClass[0], 'showAlias')).toBe(false);
  });

  it('should flip the image', () => {
    let flipperClass = DOMElement[0].querySelectorAll('.flipper');
    click(DOMElement[0].querySelector('#alias-btn'));
    fixture.detectChanges();
    expect(findStringInNode(flipperClass[0], 'showAlias')).toBe(true);
  });

  describe('Metadata', () => {

    it("should show metadata div", () => {
      expect(DOMElement[0].querySelector('#metadata')).toBeTruthy();
    });

    it('the DOM should display the mocked metadata', () => {
      let debug = DOMElement[0].querySelectorAll('#metadata li');
      expect(findStringInNode(debug[0], testMeta.metadata)).toBe(true);
    });

  });

});
