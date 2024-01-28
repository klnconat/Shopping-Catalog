import axios from 'axios';

export default {
  get(resources: string) {
    axios.defaults.headers.common['X-Country-Id'] = 'TR';
    axios.defaults.headers.common['Content-Type'] =
      'application/json charset=utf-8';
    axios.defaults.headers.common['X-Language-Id'] = 'TR';
    return axios.get(resources);
  },
};
