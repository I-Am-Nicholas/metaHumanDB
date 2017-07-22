import { async } from '@angular/core/testing';
import { MetaService } from './meta-service';
import { Headers, Http } from '@angular/http';

describe('MetaService', () => {
  let service: MetaService;
  let mockd: Http;
  let testMeta = "Superheroes";

  beforeEach(() => { //service = new MetaService(mockd);
    spyOn(service, 'getMetas').and.returnValue(testMeta);
    spyOn(service, 'getMeta').and.returnValue(testMeta);
  });

  // xit('should call its methods', () => {
  //   expect(service.getMetas()).toEqual('Superheroes');
  //   expect(service.getMeta(1)).toEqual('Superheroes');
  // });

  // it('should return a list of correct length', async(() => {
  //   service.getMetas().then(promiseItem => {
  //     expect(promiseItem.length).toEqual(10);
  //   });

  // it('should return corresponding meta', async(() => {
  //   service.getMeta(6).then(promiseItem => {
  //    expect(promiseItem.name).toEqual('Black Panther');
  //   });
  // }));

});
