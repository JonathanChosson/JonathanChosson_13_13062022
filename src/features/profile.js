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
