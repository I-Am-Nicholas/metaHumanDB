import { async, inject, TestBed } from "@angular/core/testing";
import { MockBackend, MockConnection } from "@angular/http/testing";
import { HttpModule, Http, XHRBackend, Response, ResponseOptions } from '@angular/http';

import { Meta } from "../meta";
import { MetaService } from "../meta-service";

const fakeMetaData = () => [
  {
    id:3,
    name:"Hulk",
    logo:"assets/200s/gamma.png",
    alias:"Bruce Banner",
    profile: ""
  },
  {
    id:7,
    name:"Black Panther",
    logo:"assets/200s/pantera.jpg",
    alias:"T'Challa, King of Wakanda",
    profile: ""
  }
];

describe("MetaService", () => {

  beforeEach( async(() => {

    TestBed.configureTestingModule({
      imports: [ HttpModule ],
      providers: [
        MetaService,
        { provide: XHRBackend, useClass: MockBackend }
      ]
    })

  }));
/*injects MetaService properties into service, making it an instance*/
  it("can use service as an instance of MetaService",
    inject([MetaService], (service: MetaService) => {
      expect(service instanceof MetaService).toBe(true);
  }));

  it("can instantiate the service with 'new'", inject([Http], (http: Http) => {
    expect(http).not.toBeNull();//null would mean defined but with unassignd value.
    let service = new MetaService(http);
    expect(service instanceof MetaService).toBe(true);
  }));


  it("can use the mockBackend as XHRBackend",
    inject([XHRBackend], (backend: MockBackend) => {
      expect(backend instanceof MockBackend).toBe(true);
      expect(backend).not.toBeNull();
  }));

  describe("when getMetas", () => {
      let backend: MockBackend;
      let service: MetaService;
      let fakeMetas: Meta[];
      let response: Response;

      beforeEach(inject([Http, XHRBackend], (http: Http, be: MockBackend) => {
        backend = be;
        service = new MetaService(http);
        fakeMetas = fakeMetaData();
        let options = new ResponseOptions({status: 200, body: {data: fakeMetas}});
        response = new Response(options);
      }));

      it("should expect fake heroes", async(inject([], () => {
        backend.connections.subscribe((c: MockConnection) => c.mockRespond(response));
        service.getMetas()
          .then(metas => {
            expect(metas.length).toBe(fakeMetas.length);
          });
      })));

      it("should expect a fake hero", async(inject([], () => {
        backend.connections.subscribe((c: MockConnection) => c.mockRespond(response));
        let idArg = 7; let haveMeta;
        service.getMeta(idArg)
          .then((metaReturned) => {//can't use 'forEach' on a Meta type!
            let length = Object.keys(metaReturned)//can't use 'length' on a Meta type!
            for (let i = 0; i < length.length; i++){
              if(metaReturned[i].id == idArg){
                haveMeta = metaReturned[i];
              }
            }
            expect(haveMeta.name).toEqual("Black Panther");
          });
      })));

  });
});
