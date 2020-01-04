import axios, { AxiosInstance } from 'axios';

export abstract class Common {
    entries_: any[]|undefined;
    conn: AxiosInstance;

    constructor(readonly baseURL: string, readonly apiKey: string) {
        this.conn = axios.create({
            baseURL: baseURL,
            headers: {
                'X-API-KEY': apiKey
            }
        })
    }

  async list(forceUpdate: boolean) {
    if (forceUpdate === true || !(this.entries_)) {
      this.entries_ = Array.from((await this.conn.get('')).data);
    }
    return this.entries_;
  }

  async create(content: any) {
      return (await this.conn.post('', content)).data;
  }

  async update(id: string, content: any) {
      return (await this.conn.patch(id, content)).data;
  }

  async delete(id: string) {
      return (await this.conn.delete(id)).data;
  }
}