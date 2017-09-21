import {path} from 'ramda'
import {graphql} from 'react-apollo'
import {connect} from 'react-redux'

import Logout from './Logout'
import {logout} from './actions'
import {LOGOUT_USER} from './mutations'

const LogoutWithData = graphql(LOGOUT_USER, {
    props: ({mutate, ownProps}) => ({
        async tryLogout() {
            const token = ownProps.token || sessionStorage.getItem('token') || localStorage.getItem('token')
            const success = await mutate({variables: {token}})
            if (success) {
                ownProps.logoutUser()
                sessionStorage.removeItem('token')
                localStorage.removeItem('token')
            }
        }
    })
})(Logout)

const mapStoreToProps = store => ({
    token: path(['auth', 'user', 'access_token'], store)
})

const mapDispatchToProps = dispatch => ({
    logoutUser() {
        return dispatch(logout())
    }
})

export default connect(mapStoreToProps, mapDispatchToProps)(LogoutWithData)
