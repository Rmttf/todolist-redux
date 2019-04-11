import { call,put,takeEvery,takeLatest } from 'redux-saga/effects';

function* fetchAdd(action) {
    try {
        yield put({
            type : 'new add',
            item : action.item,
            sign : 'add'
        })
    } catch (e) {
        yield put({
            type : 'bad add',
            item : action.item,
            sign : 'add failed'
        })
    }
}

function* mySaga() {
    yield takeEvery('add',fetchAdd);
}

export default mySaga;