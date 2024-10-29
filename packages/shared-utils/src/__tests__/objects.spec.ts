import { stringifyObject } from '../objects';

describe('objects', () => {
  describe('stringifyObject', () => {
    it('should stringify an object', () => {
      console.log(stringifyObject({ primary: { dark: 'blue' } }));
    });
  });
});
