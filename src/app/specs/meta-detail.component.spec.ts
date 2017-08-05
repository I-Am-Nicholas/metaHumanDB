import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA, DebugElement } from '@angular/core';
import { HttpModule } from "@angular/http";
import { ActivatedRoute, ParamMap }   from '@angular/router';

import { ActivatedRouteStub } from "../../testing/router-stubs";
import { MetaDetailComponent } from '../components/meta-detail.component'
import { MetaRatingComponent } from '../components/meta-rating.component';
import { MetaService } from "../meta-service";
import { Meta } from '../meta'

let fixture: ComponentFixture<MetaDetailComponent>;

let activatedRoute: ActivatedRouteStub;
let comp: MetaDetailComponent;
let DOMElement: DebugElement;
let testMeta: Meta;

describe('MetaDetailComponent', () => {

  beforeEach(() => {
    activatedRoute = new ActivatedRouteStub();

    TestBed.configureTestingModule({
      imports: [ HttpModule ],
      schemas: [ NO_ERRORS_SCHEMA ],
      declarations: [ MetaDetailComponent ],
      providers: [ MetaService,
        { provide: ActivatedRoute, useValue: activatedRoute },
      ]
    });

  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MetaDetailComponent);
    DOMElement = fixture.nativeElement.children;

    testMeta = ({id: 1, name: "Thor", logo: "Mjolnir", alias: "God of Thunder", profile: "", headshot: ""});
    comp = fixture.componentInstance;
    comp.clicked = testMeta;
    fixture.detectChanges();
  });


  it("should display the correct meta's name and alias", () => {
    let expectedPipedName = testMeta.name;
    let expectedPipedAlias = testMeta.alias;
    expect(DOMElement[0].textContent).toContain(expectedPipedName);
    expect(DOMElement[0].textContent).toContain(expectedPipedAlias);
  });

  it("should not display logo details", () => {
    let unexpectedPipedLogo = testMeta.logo;
    expect(DOMElement[0].textContent).not.toContain(unexpectedPipedLogo);
  });

  it("should display the meta's profile", () => {
    expect(DOMElement[0].querySelector('#profile')).toBeTruthy();
  });

  it("should display the meta's image", () => {
    expect(DOMElement[0].querySelector('#headshot')).toBeTruthy();
  });


});
