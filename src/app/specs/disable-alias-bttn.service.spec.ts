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

  it("should return true boolean from the Observable stream", () => {
    service.relayMessage(true);
    service.messageOut().subscribe(result => expect(result).toEqual({ text: true }));
  });

  it("should return false boolean from the Observable stream", () => {
    service.relayMessage(false);
    service.messageOut().subscribe(result => expect(result).toEqual({ text: false }));
  });

  it("should return the correct raw true boolean value", () => {
    service.relayMessage(true);
    expect(service.getState()).toBe(true);
  });

  it("should return the correct raw false boolean value", () => {
    service.relayMessage(false);
    expect(service.getState()).toBe(false);
  });

});
