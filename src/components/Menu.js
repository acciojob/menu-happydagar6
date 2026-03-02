import React from 'react'

const Menu = ({items}) => {
  return (
    <div className='menu-list'>
      {items.map((item) => (
        <div key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.price}</p>
            <p>{item.category}</p>
        </div>
      ))}
    </div>
  )
}

export default Menu
