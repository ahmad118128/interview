import React from 'react';
import './main.css';

export default function Bem() {
  return (
    <main>
      <div className="myCard">
        <h1 className="myCard--header">My Application Card</h1>
        <ul className="myCard--list">
          <li className="myCard--list__item">best quality</li>
          <li className="myCard--list__item">width discount</li>
          <li className="myCard--list__item">best sales</li>
        </ul>
      </div>
    </main>
  );
}
