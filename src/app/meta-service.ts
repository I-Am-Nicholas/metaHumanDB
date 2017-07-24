import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { Meta } from './meta';


@Injectable()
export class MetaService {

  private metalistUrl = 'api/metalism';

/*the metalistUrl variable is assigned the value returned by the web url. At present,
this particular value is being instructed to look in the InMemoryDataService class for a
variable named 'metalism'*/

/*injected Http client from an Angular library, giving access to http methods.*/
  constructor(private http: Http) { }


/*The 'getMeta' method expects an id as a parameter in the form of a number.
- It then sets up an instruction to search for that id within the
array-like value of metalistUrl and to return the single value associated with
 that id, which is then assigned to a const url.
- The get method of http then sends that instruction to the server, which carries
 out the search and returns the value.
- http.get returns an Observable(as do all http service methods), a sort of
non-static asynchronous collection of flowing events not stored in memory.
- This Observable is then turned into a Promise, the resolution of which is the
conversion of the response into a json object of Meta type. */

  getMeta(id: number): Promise<Meta> {
    const url = '${this.metalistUrl}/${id}';
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Meta)
      .catch(this.handleError);
  }

  /*Same as above except that this will return the entire list then resolve the
   promise by returning an array of Meta type. */
  getMetas(): Promise<Meta[]> {
    return this.http.get(this.metalistUrl)
      .toPromise()
      .then(response => response.json().data as Meta[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred, Nicholas:', error);
    return Promise.reject(error.message || error);
  }

}
