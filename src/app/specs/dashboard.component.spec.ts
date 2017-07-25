import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
// import { MockBackend } from '@angular/http/testing';
import { ComponentFixtureAutoDetect } from '@angular/core/testing';
import { DebugElement } from '@angular/core';


import { DashboardComponent } from '../components/dashboard.component';
import { MetaService } from '../meta-service';
import { Meta } from '../meta';


let fixture: ComponentFixture<DashboardComponent>;
let HTMLnode: HTMLElement;
let page: Page;
let comp: DashboardComponent;
let el: DebugElement;
let metaService: MetaService;
let serviceStub: Meta;

describe('DashboardComponent', () => {

  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [ HttpModule ],
      declarations: [ DashboardComponent ],
      providers: [ MetaService,
        { provide: ComponentFixtureAutoDetect, useValue: true }/*automatically
         detecting DOM changes at root*/
        ]
    });

    metaService = fixture.debugElement.injector.get(MetaService);


    fixture = TestBed.createComponent( DashboardComponent );
    HTMLnode = fixture.nativeElement;
    comp = fixture.componentInstance;
    el = fixture.debugElement;
    page = new Page();

    TestBed.compileComponents();

  });

  fit("should render a video background", () => {
    console.log(fixture.debugElement.queryAll(By.css('.dashBtns')));
    expect(HTMLnode.querySelector('#my-video').childElementCount).toEqual(3);
  });

  it("should render a wrapper for the dashboard elements", () => {
    expect(HTMLnode.querySelector('#grid-wrap').childElementCount).toEqual(1);
  });

  it("should render correct number of buttons elements", () => {
    expect(page.dashButtons.length).toBeGreaterThan(0)
  });

  fit("should render correct number of image elements", async(() => {
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(page.dashImages.length).toBeGreaterThan(0);
    });
  }));

  it("should render same number of images as of buttons", () =>{
    expect(page.dashImages.length).toBeGreaterThan(0);
    expect(page.dashImages.length == page.dashButtons.length).toBe(true);
  });

});

// var checkDOMWhenStable = async(()=> {
//    fixture.whenStable().then(() => {
//      page = new Page();
//      })
// });


class Page {
  dashButtons: HTMLElement[];
  dashImages: HTMLElement[];

  constructor() {
    this.dashButtons = el.queryAll(By.css('.dashBtns'))
      .map(debug => debug.nativeElement);
    this.dashImages = el.queryAll(By.css('img'))
      .map(debug => debug.nativeElement);
  }

}
