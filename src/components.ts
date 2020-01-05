import { Common } from './common';

export interface Component {
    componentID?: string,
    name?: string,
    description?: string,
    status?: string,
    order?: number
}

export class Components extends Common<Component> {
  constructor(baseURL: string, apiKey: string) {
    super(baseURL + '/components', apiKey);
  }

  async get(_: string): Promise<Component> {
    throw new Error('Not supported.');
  }
}
