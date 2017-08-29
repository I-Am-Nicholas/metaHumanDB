import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import {  DebugElement } from '@angular/core';


import { MetasComponent } from '../components/metas.component';
import { MetaService } from '../meta-service';

describe("MetasComponent", () => {

  let comp: MetasComponent;
  let fixture: ComponentFixture<MetasComponent>;
  let DOMElement: DebugElement;

  beforeEach( () => {

    let serviceStub = {};

    TestBed.configureTestingModule({
      declarations: [ MetasComponent ],
      imports: [ RouterTestingModule ],
      schemas: [ NO_ERRORS_SCHEMA ],
      providers: [
      {provide: MetaService, useValue: serviceStub }
      ]
    });

    fixture = TestBed.createComponent(MetasComponent);
    DOMElement = fixture.nativeElement.children;
    comp = fixture.componentInstance;

  });


  it('should invoke the getTheMetas() function', () => {
    let spy = spyOn(comp, 'getTheMetas');
    comp.ngOnInit();
    expect(spy).toHaveBeenCalled();
  });

  it('selectedMeta should receive value of meta', () => {
    let testMeta = (
      {
        id: 1,
        name: "Thor",
        logo: "Mjolnir",
        alias: "God of Thunder",
        profile: [],
        headshotsFront: ""
      }
    );
    comp.onSelect(testMeta);
    expect(comp.selectedMeta).toEqual(testMeta);
  });

  it('should prepare to display the list of metas', () => {
    let metaList = fixture.debugElement.queryAll(By.css('ul'));
    expect(metaList.length).toBeGreaterThan(0);
  });

  xit('should show a little iron man flying across the screen', () => {
    expect(DOMElement[0].querySelector('#mini-iron-man')).toBeTruthy();
  });

});
