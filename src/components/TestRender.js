import React from 'react';
import PropTypes from 'prop-types';

function TestRender({ onClick }) {
  return (
    <div>
      <button onClick={onClick}>Click Me!</button>
    </div>
  );
}

TestRender.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default TestRender;
