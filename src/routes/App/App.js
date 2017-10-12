import React from 'react'
import { connect } from 'react-redux';

const App = ({ testSaga }) => {
  return (<div>
    <button onClick={testSaga}>TEST SAGA</button>
  </div>);
}

export default App