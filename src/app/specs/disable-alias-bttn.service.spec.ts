import { async, inject, TestBed } from "@angular/core/testing";
import { DisableAliasBttnService } from '../disable-alias-bttn.service'

describe("DisableAliasBttnService", () => {

  beforeEach( async(() => {

    TestBed.configureTestingModule({
      providers: [
        DisableAliasBttnService
      ]
    })

  }));

  it("can use service as an instance of HideAliasBttnService",
    inject([DisableAliasBttnService], (service: DisableAliasBttnService) => {
      expect(service instanceof DisableAliasBttnService).toBe(true);
  }));

});
