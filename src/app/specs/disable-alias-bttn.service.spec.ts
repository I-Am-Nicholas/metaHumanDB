import { async, inject, TestBed } from "@angular/core/testing";
import { DisableAliasBttnService } from '../disable-alias-bttn.service'

describe("DisableAliasBttnService", () => {
  let service: DisableAliasBttnService;

  beforeEach( async(() => {
    service = new DisableAliasBttnService;

    TestBed.configureTestingModule({
      providers: [
        DisableAliasBttnService
      ]
    })

  }));

  it("can use service as an instance of DisableAliasBttnService",
    inject([DisableAliasBttnService], (service: DisableAliasBttnService) => {
    expect(service instanceof DisableAliasBttnService).toBe(true);
  }));

  it("should pass true argument boolean to the Observable object", () => {
    service.relayMessage(true);
    expect(service.subject.value.text).toBe(true);
  });

  it("should pass false argument boolean to the Observable object", () => {
    service.relayMessage(false);
    expect(service.subject.value.text).toBe(false);
  });

});
