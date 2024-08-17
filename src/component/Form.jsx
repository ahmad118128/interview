import React, { useState } from 'react';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const handelSubmit = (e) => {
    e.preventDefault();
    setName(e.target.value);
    setEmail(e.target.value);
    alert(`Name : ${name} Email:${email}`);
  };

  return (
    <div>
      <form onSubmit={handelSubmit}>
        <div>
          <label htmlFor="name">Name :</label>
          <input type="text" name="name" id="name" />
        </div>
        <div>
          <label htmlFor="email">email :</label>
          <input type="text" name="email" id="email" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
