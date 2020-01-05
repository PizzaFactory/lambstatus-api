import axios, { AxiosInstance } from 'axios';

export abstract class Common<T> {
  entries_: Array<T>|undefined;
  conn: AxiosInstance;

  constructor(readonly baseURL: string, readonly apiKey: string) {
    this.conn = axios.create({
      baseURL: baseURL,
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey
      }
    });
  }

  async list(forceUpdate: boolean): Promise<Array<T>> {
    if (forceUpdate === true || !(this.entries_)) {
      this.entries_ = Array.from<T>((await this.conn.get('')).data);
    }
    return this.entries_;
  }

  async get(id: string): Promise<T> {
    return (await this.conn.get('/' + id)).data;
  }

  async create(content: T): Promise<T> {
    return (await this.conn.post('', content)).data;
  }

  async update(id: string, content: T): Promise<T> {
    return (await this.conn.patch('/' + id, content)).data;
  }

  async delete(id: string): Promise<T> {
    return (await this.conn.delete('/' + id)).data;
  }
}
