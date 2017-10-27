import {omit, compose, is, trim, toString} from 'ramda'
import types from './types'
import initialState from './initialState'

const parseError = compose(
    trim,
    ([label, message]) => message || label,
    str => str.split(/error:/i),
    val => (is(String, val) ? val : toString(val)),
    err => (is(Object, err) ? err.message : err)
)

export default (
    state = initialState, {
        type, app, email, user, error, token, refreshTimeout, navigation
    }
) => {
    switch (type) {
        case types.CANCEL:
            return {
                ...state,
                route: 'login',
                status: ''
            }
        case types.CLEAR_ERROR:
            return {
                ...state,
                error: '',
                status: ''
            }
        case types.CLEAR_REFRESH:
            return {
                ...state,
                refreshTimeout: clearTimeout(state.refreshTimeout)
            }
        case types.CLEAR_LOGIN:
            return {
                ...state,
                ...omit(['baseUrl'], initialState)
            }
        case types.ERROR:
            return {
                ...state,
                error: parseError(error),
                status: '',
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
        case types.GOTO_APP_REGISTRATION:
            return {
                ...state,
                route: 'application',
                status: ''
            }
        case types.GOTO_PASSWORD_HELP:
            return {
                ...state,
                route: 'password-help',
                status: ''
            }
        case types.GOTO_REGISTRATION:
            return {
                ...state,
                route: 'registration',
                status: ''
            }
        case types.LOADING_FINISHED:
            return {
                ...state,
                loading: false
            }
        case types.LOADING_STARTED:
            return {
                ...state,
                loading: true
            }
        case types.LOGIN:
            return {
                ...state,
                user,
                route: 'home',
                status: 'login'
            }
        case types.LOGOUT:
            return {
                ...omit(['refreshTimeout'], state),
                ...omit(['baseUrl'], initialState),
                status: 'logout'
            }
        case types.PASSWORD_HELP:
            return {
                ...state,
                route: 'login',
                status: 'password',
                user: {email}
            }
        case types.REFRESH:
            if (state.refreshTimeout) clearTimeout(state.refreshTimeout)

            return {
                ...state,
                refreshTimeout
            }
        case types.REGISTER_APP:
            return {
                ...state,
                app,
                route: 'login',
                status: ''
            }
        case types.REGISTER_USER:
            return {
                ...state,
                route: 'login',
                status: '',
                user: {
                    name: user.name,
                    email: user.email
                }
            }
        case types.REMEMBER_ME:
            return {
                ...state,
                rememberMe: !state.rememberMe
            }
        case types.PARSED_TOKEN:
            return {
                ...state,
                user: {
                    ...state.user,
                    token: {
                        access_token: token
                    }
                }
            }
        case types.UPDATED_TOKEN:
            return {
                ...state,
                user: {
                    ...state.user,
                    token
                }
            }
        // no default
    }

    return state
}
