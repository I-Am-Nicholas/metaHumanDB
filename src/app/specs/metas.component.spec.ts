import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA, DebugElement } from '@angular/core';
import { HttpModule } from '@angular/http';

import { By } from '@angular/platform-browser';

import { MetasComponent } from '../components/metas.component';
import { MetaService } from '../meta-service';

let comp: MetasComponent;
let fixture: ComponentFixture<MetasComponent>;
let DOMElement: DebugElement;
let serviceSpy: jasmine.Spy;
let metaService: MetaService;

const fakeMethod = "fakeMethod";

describe("MetasComponent", () => {
  let serviceStub = {};

  beforeEach(async() => {

    TestBed.configureTestingModule({
      declarations: [ MetasComponent ],
      imports: [ HttpModule ],
      schemas: [ NO_ERRORS_SCHEMA ],
      providers: [ MetaService]
    });

  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MetasComponent);
    metaService = fixture.debugElement.injector.get(MetaService);
    DOMElement = fixture.nativeElement.children;
    serviceSpy = spyOn(metaService, 'getMetas').and.returnValue(Promise.resolve(0));
    comp = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('ngOnInit() should call the sevice method function', () => {
    expect(serviceSpy).toHaveBeenCalled();
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

});
