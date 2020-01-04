import { Common } from './common';

export class Maintenances extends Common {
  constructor(baseURL: string, apiKey: string) {
    super(baseURL + '/maintenances', apiKey);
  }
}