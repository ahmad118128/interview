import React from 'react';

const Flexbox = () => {
  return (
    <div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          border: '2px solid black',
          width: '16rem',
          height: '12rem',
          margin: 'auto 20px',
        }}
      >
        <h1 style={{ color: 'red' }}>My Information</h1>
        <hr />
        <p>hello</p>
        <p>my name is fateme</p>
        <p>i am programer</p>
      </div>
    </div>
  );
};

export default Flexbox;
