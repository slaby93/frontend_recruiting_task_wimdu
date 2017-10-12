import { takeLatest, call, put, all, select } from 'redux-saga/effects';
import { TEST } from './../reducers/test';

export function* test() {
  yield console.log('SAGA WORKS');
}

export default function* watcher() {
  yield all([
    takeLatest(TEST, test)
  ]);
}
