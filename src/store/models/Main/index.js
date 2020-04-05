import { action } from 'easy-peasy';

export default {
  loading: false,
  data: {},

  setLoading: action((state, payload) => {
    state.loading = payload;
  }),

  setDataState: action((state, { name, payload }) => {
    state.data[name] = payload;
  }),
};
