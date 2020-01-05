import { LambStatusAPI } from './lambstatus';
import { Components } from './components';
import { assert, expect } from 'chai';
import 'mocha';
import { API_BASE_DIR, API_KEY } from '../test/config.spec';

let componentID = '';
let api: any;

before('create api instance', () => {
  api = new LambStatusAPI(API_BASE_DIR, API_KEY).v0.components;
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
        expect(result.componentID).not.undefined;
        expect(result.name).equals('Website');
        expect(result.description).equals('test');
        expect(result.status).equals('Operational');
        if (result.componentID) {
          componentID = result.componentID;
        }
        return true;
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
