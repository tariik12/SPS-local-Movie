import React from 'react';

const Header = () => {
    return (
        <div>
            <nav className='navbar bg-body-tertiary border border-danger'>
  <div className='container-fluid'>
    <a className='navbar-brand text-white fa-bold'>Movie World</a>
    <form className='d-flex' role='search'>
    <input className='form-control me-2' type='search' placeholder='Search' aria-label='Search' />
      <button className='btn btn-success' type='submit'>Search</button>
    </form>
  </div>
</nav>
        </div>
    );
};

export default Header;