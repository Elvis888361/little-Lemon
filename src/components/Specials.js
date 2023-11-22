import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';
const allCategories = ['all', ...new Set(items.map(item => item.category))];
function Specials() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = category => {
    console.log('click', category);
    if(category =='all'){
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <main>
    <div className="title">
          <h2>our menu</h2>
          <div className="underline" />
        </div>
        <Categories categories={categories} filterItems={filterItems} />
      <section className="menu section">
        
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default Specials;