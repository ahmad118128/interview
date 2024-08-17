import React, { useState } from 'react';

const List = () => {
  const [listItems, setListItem] = useState([
    { id: 1, product: 'iphone 11', price: 1000 },
    { id: 2, product: 'iphone 12', price: 2000 },
    { id: 3, product: 'iphone 13', price: 3000 },
  ]);
  const productHandel=(e)=>{
e.preventDefault()
setListItem((pre)=>{
    return {...pre,{id:item.id,item.product,item.price}}
})
  }
  return (
    <>
      <ul>
        {listItems.map((item) => {
          return <li>{`${item.product} : ${item.price}`}</li>;
        })}
      </ul>
    </>
  );
};

export default List;
