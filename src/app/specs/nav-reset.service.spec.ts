import { async, inject, TestBed } from "@angular/core/testing";
import { NavResetService } from '../nav-reset.service';

describe("NavResetService", () => {
  let service: NavResetService;

  beforeEach( async(() => {
    service = new NavResetService;

    TestBed.configureTestingModule({
      providers: [
        NavResetService
      ]
    })

  }));

  it("can use service as an instance of NavResetService",
    inject([NavResetService], (service: NavResetService) => {
      console.log("NavResetService");
    expect(service instanceof NavResetService).toBe(true);
  }));

});
