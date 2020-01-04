import { APIv0 } from './v0';

export class LambStatusAPI {
  baseURL: string;
  apiKey: string;
  constructor(readonly baseURL_: string, readonly apiKey_: string) {
    this.baseURL = baseURL_;
    this.apiKey = apiKey_;
  }

  get v0() {
    return new APIv0(this.baseURL, this.apiKey);
  }
}
