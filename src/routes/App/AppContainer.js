import React from 'react';
import App from './App'
import { connect } from 'react-redux'
import { TEST } from './../../reducers/test'

const AppContainer = (props) => {
  return <App {...props} />
}

const mapStateToProps = () => {
  return {
    a: 1
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    testSaga: () => {
      dispatch(TEST());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);