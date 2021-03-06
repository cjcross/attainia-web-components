import {omit} from 'ramda'
import types from './types'
import initialState from './initialState'
import {parseError} from '../common/helpers'

export default (
    state = initialState, {
        type, app, email, user, error, token, refreshTimeout, navigation
    }
) => {
    switch (type) {
        case types.CANCEL:
            return {...state}
        case types.CLEAR_ERROR:
            return {...state, error: ''}
        case types.CLEAR_REFRESH:
            return {
                ...state,
                refreshTimeout: clearTimeout(state.refreshTimeout)
            }
        case types.CLEAR_LOGIN:
            return {...state, ...omit(['baseUrl'], initialState)}
        case types.ERROR:
            return {
                ...state,
                error: parseError(error),
                loading: false
            }
        case types.GET_USER_NAV_MENU:
            return {
                ...state,
                menu: {
                    ...state.menu,
                    navigation: navigation.map(label => ({label}))
                }
            }
        case types.LOADING_FINISHED:
            return {...state, loading: false}
        case types.LOADING_STARTED:
            return {...state, loading: true}
        case types.LOGIN:
            return {...state, user}
        case types.LOGOUT: {
            if (state.refreshTimeout) clearTimeout(state.refreshTimeout)

            return {
                ...omit(['refreshTimeout', 'parsed_token'], state),
                ...omit(['baseUrl'], initialState)
            }
        }
        case types.PASSWORD_HELP:
            return {...state, user: {email}}
        case types.REFRESH: {
            if (state.refreshTimeout) clearTimeout(state.refreshTimeout)

            return {...state, refreshTimeout}
        }
        case types.REGISTER_APP:
            return {...state, app}
        case types.REGISTER_USER:
            return {
                ...state,
                user: {
                    name: user.name,
                    email: user.email
                }
            }
        case types.REMEMBER_ME:
            return {...state, rememberMe: !state.rememberMe}
        case types.PARSED_TOKEN:
            return {...state, parsed_token: token}
        case types.VALIDATED_TOKEN:
        case types.UPDATED_TOKEN: {
            return {
                ...omit(['parsed_token'], state),
                user: {
                    ...state.user,
                    token
                }
            }
        }
        case types.USER_INFO_FROM_TOKEN:
            return {
                ...omit(['parsed_token'], state),
                user: {
                    ...state.user,
                    ...user
                }
            }
        // no default
    }

    return state
}
