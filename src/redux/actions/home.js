// import client from 'src/utilities/apiClient';

export const FETCH_USER_START = 'FETCH_USER_START';
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const FETCH_USER_FAILED = 'FETCH_USER_FAILED';

export const fetchUserStart = () => ({
  type: FETCH_USER_START
});

export const fetchUserSuccess = userData => ({
  type: FETCH_USER_SUCCESS,
  userData
});

export const fetchUserFailed = () => ({
  type: FETCH_USER_FAILED
});

// export const fetchUser = () => dispatch => {
//   dispatch(fetchUserStart());
//   client
//     .get('/')
//     .then(res => dispatch(fetchUserSuccess(res)))
//     .catch(err => dispatch(fetchUserFailed(err)));
// };
