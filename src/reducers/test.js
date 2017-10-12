import {createAction, handleActions} from 'redux-actions'

export const TEST = createAction('TEST')

const defaultState = {
    test: false
}

const reducer = handleActions({
    [TEST.type]: (state, action) => {
        return state;
    }
}, defaultState)

export default reducer
