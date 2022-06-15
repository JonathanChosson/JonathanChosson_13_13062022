import produce from 'immer'
import axios from 'axios'
import { selectLogin } from '../utils/selectors'

const BASE_URL = 'http://localhost:3001'

const initialState = {
    status: 'void',
    data: null,
}

const FETCHING = 'login/fetching'
const RESOLVED = 'login/resolved'
const REJECTED = 'login/rejected'
const LOGINSTORAGE = 'login/storage'

const loginAxios = () => ({ type: FETCHING })
const loginResolved = (data) => ({ type: RESOLVED, payload: data })
const loginRejected = (error) => ({ type: REJECTED, payload: error })
export const loginStorage = (data) => ({ type: LOGINSTORAGE, payload: data })

export async function axiosLogin(store, input, remember) {
    const status = selectLogin(store.getState()).status
    if (status === 'pending' || status === 'updating') {
        return
    }
    store.dispatch(loginAxios())
    try {
        const response = await axios.post(
            BASE_URL + '/api/v1/user/login',
            input
        )
        const data = await response
        if (remember) {
            localStorage.setItem('JWT_Key', JSON.stringify(data.data))
        }
        store.dispatch(loginResolved(data.data))
    } catch (error) {
        store.dispatch(loginRejected(error.response.data))
    }
}

export default function loginReducer(state = initialState, action) {
    return produce(state, (draft) => {
        switch (action.type) {
            case FETCHING: {
                if (draft.status === 'void') {
                    draft.status = 'pending'
                    return
                }
                if (draft.status === 'rejected') {
                    draft.error = null
                    draft.status = 'pending'
                    return
                }
                if (draft.status === 'resolved') {
                    draft.status = 'updating'
                    return
                }
                return
            }
            case RESOLVED: {
                if (draft.status === 'pending' || draft.status === 'updating') {
                    draft.data = action.payload
                    draft.status = 'resolved'
                    return
                }
                return
            }
            case REJECTED: {
                if (draft.status === 'pending' || draft.status === 'updating') {
                    draft.error = action.payload
                    draft.data = null
                    draft.status = 'rejected'
                    return
                }
                return
            }
            case LOGINSTORAGE: {
                draft.data = action.payload
                draft.status = 'resolved'
                return
            }
            default:
                return
        }
    })
}
