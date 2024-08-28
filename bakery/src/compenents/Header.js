import React from 'react';

function Header() {
  return (
    <header>
      <nav>
        <h1>Bakery Store</h1>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/products">Products</a></li>
          <li><a href="/cart">Cart</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;