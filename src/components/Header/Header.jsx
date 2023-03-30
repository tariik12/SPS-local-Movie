import React from 'react';

const Header = () => {
    return (
        <div>
            <nav class="navbar bg-body-tertiary border border-danger">
  <div class="container-fluid">
    <a class="navbar-brand text-white fa-bold">Movie World</a>
    <form class="d-flex" role="search">
    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
      <button class="btn btn-success" type="submit">Search</button>
    </form>
  </div>
</nav>
        </div>
    );
};

export default Header;