import { Common } from './common';

export interface Maintenance {
  maintenanceID?: string,
  name?: string,
  status?: string,
  startAt?: string,
  endAt?: string,
  createdAt?: string,
  updatedAt?: string,
  maintenanceUpdates?: MaintenanceUpdate[]
}

export interface MaintenanceUpdate {
  maintenanceID: string,
  maintenanceUpdateID: string,
  maintenanceStatus: string,
  message: string,
  createdAt: string,
  updatedAt: string
}
export class Maintenances extends Common<Maintenance> {
  constructor(baseURL: string, apiKey: string) {
    super(baseURL + '/maintenances', apiKey);
  }
}
