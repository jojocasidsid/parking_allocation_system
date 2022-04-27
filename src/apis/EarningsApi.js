import api from 'config/api';

const EarningsApi = {
  list: () => api.get('/earnings'),
  add: (data) => api.post(`/earnings`, data)
};

export default EarningsApi;
