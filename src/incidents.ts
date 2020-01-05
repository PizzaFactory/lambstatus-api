import { Common } from './common';

export interface  Incident {
  incidentID?: string,
  name?: string,
  status?: string,
  createdAt: string,
  updatedAt?: string,
  incidentUpdates?: IncidentUpdate[]
}

export interface IncidentUpdate {
  incidentID: string,
  incidentUpdate: string,
  incidentStatus: string,
  message: string,
  createdAt: string,
  updatedAt: string
}

export class Incidents extends Common<Incident> {
  constructor(baseURL: string, apiKey: string) {
    super(baseURL + 'incidents', apiKey);
  }
}