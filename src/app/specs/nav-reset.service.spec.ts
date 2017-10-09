import { async, inject, TestBed } from "@angular/core/testing";
import { NavResetService } from "../services/nav-reset.service";

describe("NavResetService", () => {
  let service: NavResetService;
  let testReset: String = "test";

  beforeEach( async(() => {

    TestBed.configureTestingModule({
      providers: [
        NavResetService
      ]
    })

    service = new NavResetService;
    service.relayNavMessage(testReset);

  }));

  it("can use service as an instance of NavResetService",
    inject([NavResetService], (service: NavResetService) => {
    expect(service instanceof NavResetService).toBe(true);
  }));

describe("relayNavMessage", () => {

  it("should pass reset value to the Observable object", () => {
    expect(service.subject.value.text).toEqual(testReset);
  });

  it("should return the reset value from the Observable stream", () => {
    service.navMessageOut().subscribe(result => expect(result).toEqual({ text: testReset }));
  });

  it("should return the reset value from the getter", () => {
    expect(service.getState()).toEqual(testReset);
  });

});

});
