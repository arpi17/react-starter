// @flow

import React from 'react';

function TestRender({ onClick }: function) {
  return (
    <div>
      <button onClick={onClick}>Click Me!</button>
    </div>
  );
}

export default TestRender;
