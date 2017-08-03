import { ComponentFixture, TestBed, async} from "@angular/core/testing";
import { HttpModule } from "@angular/http";
import { ComponentFixtureAutoDetect } from "@angular/core/testing";
import { RouterTestingModule } from '@angular/router/testing';

import { DashboardComponent } from "../components/dashboard.component";
import { MetaService } from "../meta-service";
import { Meta } from "../meta";

describe('DashboardComponent', () => {
  let fixture: ComponentFixture<DashboardComponent>;
  let HTMLnode: HTMLElement;
  let comp: DashboardComponent;
  let metaStub: any;
  let metaService: MetaService;
  let spy: jasmine.Spy;
  let routerSpy: jasmine.Spy;

  beforeEach(async(() => {

    metaStub = [
      {
        id: 3,
        name:"Hulk",
        logo:"assets/200s/gamma.png",
        alias:"Bruce Banner",
        profile: "",
        headshot: ""
      }
    ]

    TestBed.configureTestingModule({
      imports: [ HttpModule, RouterTestingModule.withRoutes([])
    ],
      declarations: [ DashboardComponent ],
      providers: [
        MetaService
      ]
    });

    fixture = TestBed.createComponent( DashboardComponent );
    HTMLnode = fixture.nativeElement;
    comp = fixture.componentInstance;

    metaService = fixture.debugElement.injector.get(MetaService);

    spy = spyOn(metaService, 'getMetas')
      .and.returnValue(Promise.resolve(metaStub));

  }));


  it("check that comp is an instance of DashboardComponent", () => {
    expect(comp instanceof DashboardComponent).toBe(true);
  });

  it("should not have metas before ngOnInit", () => {
    expect(spy).not.toHaveBeenCalled();
  });

  it("should call the spy after ngOnInit", () => {
    comp.ngOnInit();
    expect(spy).toHaveBeenCalled();
  });

  it("onSelect should route to meta-detail.component", () => {
    let navigateSpy = spyOn((<any>comp).router, 'navigate');
    comp.onSelect(metaStub[0]);
    expect(navigateSpy).toHaveBeenCalledWith(['/detail', metaStub[0].id]);
  });

  it("should render a video background", () => {
    expect(HTMLnode.querySelector('#my-video').childElementCount).toEqual(3);
  });

  it("should render a wrapper for the dashboard elements", () => {
    expect(HTMLnode.querySelector('#grid-wrap').childElementCount).toEqual(1);
  });

});
