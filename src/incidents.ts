import { Common } from './common';

export class Incidents extends Common {
  constructor(baseURL: string, apiKey: string) {
    super(baseURL + '/incidents', apiKey);
  }
}