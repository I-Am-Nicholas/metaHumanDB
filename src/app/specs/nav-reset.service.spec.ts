import { async, inject, TestBed } from "@angular/core/testing";
import { NavResetService } from '../nav-reset.service';

describe("NavResetService", () => {
  let service: NavResetService;
  let testReset: String = "test";

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

  it("should pass reset value to the Observable object", () => {
    service.relayNavMessage(testReset);
    expect(service.subject.value.text).toEqual(testReset);
  });

  it("should return the reset value from the Observable stream", () => {
    service.relayNavMessage(testReset);
    service.navMessageOut().subscribe(result => expect(result).toEqual({ text: testReset }));
  });

  it("should return the reset value from the getter", () => {
    service.relayNavMessage(testReset);
    expect(service.getState()).toEqual(testReset);
  });


});
