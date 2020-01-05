import { Components } from './components';
import { Incidents } from './incidents';
import { Maintenances } from './maintenances';

export class APIv0 {
  private components_: Components|undefined;
  private incidents_: Incidents|undefined;
  private maintenances_: Maintenances|undefined;
  private baseURL_: string;
  private apiKey_: string;

  constructor(baseURL: string, apiKey: string) {
    this.baseURL_ = baseURL + '/v0/'
    this.apiKey_ = apiKey;
  }

  public get components(): Components {
    if (!this.components_) {
      this.components_ = new Components(this.baseURL_, this.apiKey_);
    }
    return this.components_;
  }

  public get incidents(): Incidents {
    if (!this.incidents_) {
      this.incidents_ = new Incidents(this.baseURL_, this.apiKey_);
    }
    return this.incidents_;
  }

  public get maintenances(): Maintenances {
    if (!this.maintenances_) {
      this.maintenances_ = new Maintenances(this.baseURL_, this.apiKey_);
    }
    return this.maintenances_;
  }
}
