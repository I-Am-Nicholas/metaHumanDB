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
    expect(service instanceof NavResetService).toBe(true);
  }));

  it("should pass true argument boolean to the Observable object", () => {
    service.relayNavMessage(true);
    expect(service.subject.value.text).toBe(true);
  });

  it("should pass false argument boolean to the Observable object", () => {
    service.relayNavMessage(false);
    expect(service.subject.value.text).toBe(false);
  });

  it("should return true boolean from the Observable stream", () => {
    service.relayNavMessage(true);
    service.navMessageOut().subscribe(result => expect(result).toEqual({ text: true }));
  });

  it("should return false boolean from the Observable stream", () => {
    service.relayNavMessage(false);
    service.navMessageOut().subscribe(result => expect(result).toEqual({ text: false }));
  });

  it("should return the correct raw true boolean value", () => {
    service.relayNavMessage(true);
    expect(service.getState()).toBe(true);
  });

  it("should return the correct raw false boolean value", () => {
    service.relayNavMessage(false);
    expect(service.getState()).toBe(false);
  });

});
