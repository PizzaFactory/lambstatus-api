import { Common } from './common';

export class Components extends Common {
  constructor(baseURL: string, apiKey: string) {
    super(baseURL + '/components', apiKey);
  }
}