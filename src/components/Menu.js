import React from 'react'

const Menu = ({items}) => {
  return (
    <div className='menu-list'>
      {items.map((menuItem) => (
        <div data-test-id={`menu-item-${menuItem.category.toLowerCase()}`}
          className="menu-item" key={menuItem.id}>
            <h3>{menuItem.title}</h3>
            <p>{menuItem.price}</p>
            <p>{menuItem.category}</p>
        </div>
      ))}
    </div>
  )
}

export default Menu;

