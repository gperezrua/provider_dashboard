import axios from 'axios';

//Constants
const initialState = {
  array: []
}

//Types
export const FETCH_PROVIDERS = 'FETCH_PROVIDERS'
export const FETCH_PROVIDER = 'FETCH_PROVIDER'
export const FETCH_SERVICE_COST_PROVIDER = 'FETCH_SERVICE_COST_PROVIDER'

//Reducers
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_PROVIDERS:
      return { ...state, array: payload }
    case FETCH_PROVIDER:
      return { ...state, provider: payload }
    case FETCH_SERVICE_COST_PROVIDER:
      return { ...state, services: payload }

    default:
      return state
  }
}

//Actions
export const getProviders = () => async (dispatch) => {
  const requestUrl = 'http://localhost:8080/api/providers';
  const res = await axios.get(requestUrl);
  dispatch ({
    type: FETCH_PROVIDERS,
    payload: res.data,
  });
};

export const getProvider = (url) => async (dispatch) => {
  const res = await axios.get(url);
  dispatch ({
    type: FETCH_PROVIDER,
    payload: res.data,
  });
};

export const getServiceCostByProvider = (provider) => async (dispatch) => {
  const url = 'http://localhost:8080/api/provider/'+ provider +'/cost';
  const res = await axios.get(url);
  dispatch ({
    type: FETCH_SERVICE_COST_PROVIDER,
    payload: res.data,
  });
};

