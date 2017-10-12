import React from 'react'
import { connect } from 'react-redux';
import Button from './../../components/Button'

const App = ({ fetchUsers, isRequesting }) => {
  return (<div>
    {isRequesting && <span>Loading ...</span>}
    {!isRequesting && <Button onClick={fetchUsers}>Fetch users</Button>}

  </div>);
}

export default App