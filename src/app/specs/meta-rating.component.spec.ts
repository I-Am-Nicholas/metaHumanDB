import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { Meta } from "../meta";

import { MetaRatingComponent } from '../components/meta-rating.component';

describe('MetaRatingComponent', () => {
  let comp: MetaRatingComponent;
  let fixture: ComponentFixture<MetaRatingComponent>;
  let DOMElement: DebugElement;
  let testMeta: Meta;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetaRatingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {

    testMeta = ({
      id: 1,
      name: "Thor",
      logo: "Mjolnir",
      alias: "God of Thunder",
      profile: "",
      headshot: "",
      level: ["50", "100", "100"]
    });

    let testIQLevel = testMeta.level[0]

    fixture = TestBed.createComponent(MetaRatingComponent);
    comp = fixture.componentInstance;
    comp.security(testIQLevel)
    DOMElement = fixture.nativeElement.children;
    fixture.detectChanges();

  });

  it('should be created', () => {
    expect(comp).toBeTruthy();
  });

  it('calling security method should set IQ height bar to 50%', () => {
    expect(comp.untrusted).toEqual('height: 50%');
  });

});
