import axios from "axios";

class axiosService {
  constructor() {
    const instance = axios.create();
    instance.interceptors.response.use(this.handleSuccess, this.handleError);
    this.instance = instance;
  }

  handleSuccess(response) {
    return response;
  }
  handleError(error) {
    return Promise.reject(error);
  }
  get(url, Header = {}) {
    return this.instance.get(url, Header);
  }
  post(url, body) {
    return this.instance.post(url, body);
  }

  put(url, body) {
    return this.instance.put(url, body);
  }

  delete(url) {
    return this.instance.delete(url);
  }
}

export default new axiosService();
