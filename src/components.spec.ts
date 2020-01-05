import { Components } from './components';
import { APIv0 } from './v0';
import { expect } from 'chai';
import 'mocha';
import { API_BASE_DIR, API_KEY } from './config.spec';

console.dir(API_BASE_DIR);

let componentID = '';

describe('components', () => {

    it('new', () => {
      const result = new Components('https://example.com', 'foo');
      expect(result).any
    });

    it('create', async () => {
        const api = new APIv0(API_BASE_DIR, API_KEY).components;
        const result = await api.create({
          name: 'Website',
          description: 'test',
          status: 'Operational'
        });
        expect(result.componentID).not.undefined;
        expect(result.description).equals('Website');
        expect(result.status).equals('Operational');
        if (result.componentID) {
          componentID = result.componentID;
        }
    });

    it('get', async () => {
        const api = new Components(API_BASE_DIR, API_KEY);
        const result = await api.get(componentID);
        expect(result.componentID).not.undefined;
        expect(result.description).equals('Website');
        expect(result.status).equals('Operational');
        if (result.componentID) {
          componentID = result.componentID;
        }
    });
});
