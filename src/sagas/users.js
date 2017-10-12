import { takeLatest, put, all } from 'redux-saga/effects';
import { FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE } from './../reducers/users';

export function* test() {
  try {
    const response = yield fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'GET'
    })
    const users = yield response.json()
    yield put(FETCH_USERS_SUCCESS({ users }))
  } catch (error) {
    yield put(FETCH_USERS_FAILURE(error))
  }
}

export default function* watcher() {
  yield all([
    takeLatest(FETCH_USERS_REQUEST, test)
  ]);
}
