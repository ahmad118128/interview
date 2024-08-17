import React from 'react';

const Parent = () => {
  const childName = 'fatemeh';
  const childAge = 27;
  return (
    <div>
      <Child name={childName} age={childAge} />
    </div>
  );
};

export default Parent;
