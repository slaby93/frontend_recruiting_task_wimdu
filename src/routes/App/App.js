import React from 'react'
import { connect } from 'react-redux';
import Button from './../../components/Button'

const App = ({ fetchUsers }) => {
  return (<div>
    <Button onClick={fetchUsers}>Fetch users</Button>
  </div>);
}

export default App