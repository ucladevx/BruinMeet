import {create} from 'apisauce';
const BASE_URL = 'http://ec2-54-193-66-196.us-west-1.compute.amazonaws.com';

class API {
  constructor() {
    this._client = create({
      baseURL: BASE_URL,
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }

  async login(info) {
      const res = await this._client.post('/login/', { email: info.email, password: info.password });
      if (res.problem) {
        console.error(res);
        throw new Error();
      }
      return res;
  }
}

export default new API()
