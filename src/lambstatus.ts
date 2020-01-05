import { APIv0 } from './v0';

export class LambStatusAPI {
  private baseURL_: string;
  private apiKey_: string;
  private v0_: APIv0|undefined;

  constructor(readonly baseURL: string, readonly apiKey: string) {
    this.baseURL_ = baseURL;
    this.apiKey_ = apiKey;
  }

  get v0() {
    if (!this.v0_) {
      this.v0_ = new APIv0(this.baseURL_, this.apiKey_);
    }
    return this.v0_;
  }
}
