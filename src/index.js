import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const App = ({ className }) => {
  return <div className="test">
    <span className="dupa">Test</span>
  </div>;
}

const StyledComponent = styled(App) `
  background-color: green;
`;

ReactDOM.render(<StyledComponent />, document.getElementById('app'));