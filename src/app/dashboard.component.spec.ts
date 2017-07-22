import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { HttpModule, XHRBackend } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { ComponentFixtureAutoDetect } from '@angular/core/testing';


import { DashboardComponent } from './dashboard.component';
import { MetaService } from './meta-service';
import { Meta } from './meta';


let fixture: ComponentFixture<DashboardComponent>;
let HTMLnode: HTMLElement;
let page: Page;
// let serviceStub: {};
// let metaService: MetaService;
let comp: DashboardComponent;

describe('DashboardComponent', () => {

  beforeEach(() => {

    // serviceStub = {
    //   id: 1, name: "Thor", logo: "Mjolnir", alias: "God of Thunder"
    // };

    // spyOn(metaService, 'getMetas').and.returnValue(serviceStub);

    TestBed.configureTestingModule({
      imports: [ HttpModule ],
      declarations: [ DashboardComponent ],
      providers: [ MetaService,
        { provide: ComponentFixtureAutoDetect, useValue: true }
        // {provide: MetaService, useValue: serviceStub },
        // {provide: XHRBackend, useClass: MockBackend }
      ]
    });

    fixture = TestBed.createComponent( DashboardComponent );
    HTMLnode = fixture.nativeElement;
    comp = fixture.componentInstance;

    TestBed.compileComponents().then(checkDOMWhenStable);

  });

  it("should render a video background", () => {
    expect(HTMLnode.querySelector('#my-video').childElementCount).toEqual(3);
  });

  it("should render a wrapper for the dashboard elements", () => {
    expect(HTMLnode.querySelector('#grid-wrap').childElementCount).toEqual(1);
  });

  it("should render correct number of buttons elements", () => {
    expect(page.dashButtons.length).toBeGreaterThan(0)
  });

  it("should render correct number of image elements", () => {
    expect(page.dashImages.length).toBeGreaterThan(0);
  });

  it("should render same number of images as of buttons", () =>{
    expect(page.dashImages.length).toBeGreaterThan(0);
    expect(page.dashImages.length == page.dashButtons.length).toBe(true);
  });

});

let checkDOMWhenStable = async(()=> {
   fixture.whenStable().then(() => {
    page = new Page();
    })
    .catch(handleError);
});

let handleError = (error: any): Promise<any> => {
  console.error('An error occurred, Nicholas:', error);
  return Promise.reject(error.message || error);
}


class Page {
  dashButtons: HTMLElement[];
  dashImages: HTMLElement[];

  constructor() {
    this.dashButtons = fixture.debugElement.queryAll(By.css('.dashBtns'))
      .map(debug => debug.nativeElement);
    this.dashImages = fixture.debugElement.queryAll(By.css('img'))
      .map(debug => debug.nativeElement);
  }
}
