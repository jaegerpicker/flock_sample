import index from '../index.js';

test('index can send a get', () => {
  expect(
    index.get(
      'http://swapi.co/api/people/1/',
      '',
      results => {
        console.log(results);
      },
      error => {
        console.log('An error status was returned ' + error);
      }
    )
  ).toBeUndefined();
});
