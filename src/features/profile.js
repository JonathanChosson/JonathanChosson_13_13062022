import produce from 'immer'
import axios from 'axios'
import { selectProfile } from '../utils/selectors'

const BASE_URL = 'http://localhost:3001'

const initialState = {
    status: 'void',
    data: null,
}

const FETCHING = 'profile/fetching'
const RESOLVED = 'profile/resolved'
const REJECTED = 'profile/rejected'

const profileAxios = () => ({ type: FETCHING })
const profileResolved = (data) => ({ type: RESOLVED, payload: data })
const profileRejected = (error) => ({ type: REJECTED, payload: error })

export async function axiosProfile(store) {
    let key = ''
    if (store.getState().login.data) {
        key = store.getState().login.data.body.token
    }

    const status = selectProfile(store.getState()).status
    if (status === 'pending' || status === 'updating') {
        return
    }
    store.dispatch(profileAxios())
    try {
        const response = await axios.post(
            BASE_URL + '/api/v1/user/profile',
            {},
            { headers: { authorization: 'Bearer ' + key } }
        )
        const data = await response
        store.dispatch(profileResolved(data.data))
    } catch (error) {
        console.log(error.response.data)
        store.dispatch(profileRejected(error.response.data))
    }
}

export default function profileReducer(state = initialState, action) {
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
                    localStorage.clear()
                    window.location.replace('./sign_in')
                    return
                }
                return
            }
            default:
                return
        }
    })
}
