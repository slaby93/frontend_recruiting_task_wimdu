import React from 'react';
import App from './App'
import { connect } from 'react-redux'
import { FETCH_USERS_REQUEST } from './../../reducers/users'

const AppContainer = (props) => {
  return <App {...props} />
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => {
      dispatch(FETCH_USERS_REQUEST());
    }
  }
}

export default connect(null, mapDispatchToProps)(AppContainer);