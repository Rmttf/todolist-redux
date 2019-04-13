import { call,put,takeEvery,takeLatest } from 'redux-saga/effects';

function newPromise() {
    return  new Promise(function (resolve) {
        setTimeout(function () {
            console.log('异步完成');
            resolve();
        }, 2000);
    })
}

function* fetchAdd(action) {
    try {
        yield call(newPromise)
        yield put({
            type : 'new add',
            item : {
                'id': action.item.id + 1,
                'content': action.item.content,
                'complete': true
            },
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