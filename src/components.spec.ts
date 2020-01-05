import { Components } from './components';
import { APIv0 } from './v0';
import { assert, expect } from 'chai';
import 'mocha';
import { API_BASE_DIR, API_KEY } from './config.spec';

let componentID = '';
let api: any;

before('create api instance', () => {
  api = new APIv0(API_BASE_DIR, API_KEY).components;
});

describe('components', () => {

    it('new', () => {
      const result = new Components('https://example.com', 'foo');
      expect(result).any
    });

    it('create', async () => {
        const result = await api.create({
          name: 'Website',
          description: 'test',
          status: 'Operational'
        });
        console.dir(result);
        expect(result.componentID).not.undefined;
        expect(result.name).equals('Website');
        expect(result.description).equals('test');
        expect(result.status).equals('Operational');
        if (result.componentID) {
          componentID = result.componentID;
        }
        return Promise.resolve();
    });

    it('get', async () => {
      try {
        const result = await api.get(componentID);
        assert.fail('Should be railed the exception.');
      } catch (e) {
      }
    });

    it('update', async () => {
      const desc = 'foo';
      const result = await api.update(componentID, {
        description: desc
      });
      expect(result.description).equals(desc);
      return true;
    });

    it('delete', async () => {
      const result = await api.update(componentID);
      expect(result.componentID).equals(componentID);
      return true;
    });
});
