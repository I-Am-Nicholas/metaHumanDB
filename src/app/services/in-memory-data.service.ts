import { InMemoryDbService } from 'angular-in-memory-web-api';
import metas from '../metas.json';

export class InMemoryDataService implements InMemoryDbService {
  createDb() { /*a method of InMemoryDataService that creates
    a hash (collection names: collection objects)*/

    const theMetasList = metas.metalist; /*the json file can be imported
     using any name. If the data it contains is an array you need
     no more code than: <let metalism = metas;>, but if the data is in object
     form you must drill down to the object that directly references
      the array: <metalism = metas.metalist;>*/

    return {theMetasList}; // used for the URL path.
  }
}
