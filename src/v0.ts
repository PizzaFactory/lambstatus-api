import { Components } from './components';
import { Incidents } from './incidents';
import { Maintenances } from './maintenances';

export class APIv0 {
  components_: Components;
  incidents_: Incidents;
  maintenances_: Maintenances;

  constructor(baseURL: string, apiKey: string) {
    this.components_ = new Components(baseURL, apiKey);
    this.incidents_ = new Incidents(baseURL, apiKey);
    this.maintenances_ = new Maintenances(baseURL, apiKey);
  }

  public get components(): Components {
    return this.components_;
  }

  public get incidents(): Incidents {
    return this.incidents_;
  }

  public get maintenances(): Maintenances {
    return this.maintenances_;
  }
}
