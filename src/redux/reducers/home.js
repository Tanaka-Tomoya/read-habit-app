import {
  FETCH_USER_START,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILED
} from 'src/redux/actions/home';

const initialState = {
  isLoading: false,
  hasError: false,
  userData: []
};

const home = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_START:
      return {
        isLoading: true,
        hasError: false,
        userData: []
      };
    case FETCH_USER_SUCCESS:
      return {
        isLoading: false,
        hasError: false,
        userData: action.userData
      };
    case FETCH_USER_FAILED:
      return {
        isLoading: false,
        hasError: true,
        userData: action.payload
      };
    default:
      return state;
  }
};

export default home;
