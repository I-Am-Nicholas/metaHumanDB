import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let metalist = [
      {id: 1, name: 'Iron Man', logo: 'assets/200s/faceplate.png', alias: 'Tony Stark' },
      {id: 2, name: 'Captain America', logo: 'assets/200s/shield.png', alias: 'Steve Rogers' },
      {id: 3, name: 'Hulk', logo: 'assets/200s/gamma.png', alias: 'Bruce Banner' },
      {id: 4, name: 'Spider-Man', logo: 'assets/200s/spidey.png', alias: 'Peter Parker' },
      {id: 5, name: 'Thor', logo: 'assets/200s/mjolnir.jpg', alias: 'God of Thunder' },
      {id: 6, name: 'Black Panther', logo: 'assets/pantera.jpg', alias: "T'Challa, King of Wakanda" },
      {id: 7, name: 'Scarlet Witch', logo: 'assets/scarlet.png', alias: 'Wanda Maximoff' },
      {id: 8, name: 'Hawkeye', logo: 'assets/hawk.png', alias: 'Clint Barton' },
      {id: 9, name: 'Black Widow', logo: 'assets/spider-bw.png', alias: 'Natasha Romanoff' },
      {id: 10, name: 'Vision', logo: 'assets/gem.png', alias: 'Vision' }
    ];
    return {metalist};
  }
}
