import React from 'react';
import spinner from './spinner.gif';

export default () => {  
  return (
    <tbody className="spinner-container">
      <tr><td colspan="6">
      <img
        src={spinner}
        style={{ width: '200px', margin: 'auto', display: 'block' }}
        alt="Loading..."
      />
      </td></tr>
    </tbody>
  );
};
