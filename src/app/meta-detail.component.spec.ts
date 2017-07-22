import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { DebugElement } from '@angular/core';

import { MetaDetailComponent } from './meta-detail.component'
import { Meta } from './meta'

let fixture: ComponentFixture<MetaDetailComponent>;
let comp: MetaDetailComponent;
let DOMElement: DebugElement;
let testMeta: Meta;

describe('MetaDetailComponent', () => {

  beforeEach( async(() => {

    TestBed.configureTestingModule({
      declarations: [ MetaDetailComponent ],
    });

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetaDetailComponent);
    DOMElement = fixture.nativeElement.children;

    testMeta = ({id: 1, name: "Thor", logo: "Mjolnir", alias: "God of Thunder"});
    comp = fixture.componentInstance;
    comp.valueFromMetasComponent = testMeta;
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


});
