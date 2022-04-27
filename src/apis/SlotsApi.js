import api from 'config/api';
import moment from 'moment';

const SlotsAPI = {
  list: () => api.get('/slots'),
  editSlot: (id, data) => {
    const requestData = {
      ...data
    };

    return api.put(`/slots/${id}`, requestData);
  },

  parkSlot: (id, type) => {
    const requestData = { parked: type, dateTime: moment() };
    return api.patch(`/slots/${id}`, requestData);
  },

  leaveSlot: (id) => {
    const requestData = { parked: 0, dateTime: null };
    return api.patch(`/slots/${id}`, requestData);
  },

  getNearestParking: (vehicleType, exit) =>
    api.get('/slots', {
      params: {
        parked: 0,
        type_gte: vehicleType,
        _sort: exit,
        _order: 'asc',
        _limit: '1'
      }
    })
};

export default SlotsAPI;
