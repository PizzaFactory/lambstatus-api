import { LambStatusAPI } from './lambstatus';
import { Maintenances } from './maintenances';
import { assert, expect } from 'chai';
import 'mocha';
import { API_BASE_DIR, API_KEY } from '../test/config.spec';

let maintenanceID = '';
let api: any;

before('create api instance', () => {
  api = new LambStatusAPI(API_BASE_DIR, API_KEY).v0.maintenances;
});

describe('maintenances', () => {

    it('new', () => {
      const result = new Maintenances('https://example.com', 'foo');
      expect(result).any
    });

    it('create', async () => {
        const result = await api.create({
          name: 'Website',
          message: 'test',
          startAt: '2018-04-22T16:00:00.000Z',
          endAt: '2018-04-22T19:00:00.000Z',
          status: 'Scheduled'
        });
        console.dir(result);
        expect(result.maintenanceID).not.undefined;
        expect(result.name).equals('Website');
        expect(result.status).equals('Scheduled');
        if (result.maintenanceID) {
          maintenanceID = result.maintenanceID;
        }
        return true;
    });

    it('get', async () => {
      try {
        const result = await api.get(maintenanceID);
        assert.fail('Should be railed the exception.');
      } catch (e) {
      }
    });

    it('update', async () => {
      const desc = 'foo';
      const result = await api.update(maintenanceID, {
        name: desc
      });
      expect(result.name).equals(desc);
      return true;
    });

    it('delete', async () => {
      const result = await api.update(maintenanceID);
      expect(result.maintenanceID).equals(maintenanceID);
      return true;
    });
});
