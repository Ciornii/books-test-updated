import React, { useState } from 'react';
import './header.scss';
import { Link, NavLink } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { selectFavorites } from '../../redux/slices/favorites';
import { setSearchTerm } from '../../redux/slices/search';

const Header = () => {
  const dispatch = useAppDispatch()
  const [searchValue, setSearchValue] = useState('');
  const favorites = useAppSelector(selectFavorites)

  const searchHandler = () => {
    dispatch(setSearchTerm(searchValue))
    setSearchValue('');
  };

  return (
    <header className='header'>
      <div className='container'>
        <div className='header__inner'>
          <Link className='header__logo' to='/' title='home'>
            <i className='fas fa-book-open'></i>Books App
          </Link>
          <div className='header__search'>
            <input
              value={searchValue}
              onChange={e => setSearchValue(e.target.value)}
              type='text'
              placeholder='Input book name'
            />
            <button onClick={() => searchHandler()}>
              <i className='fas fa-search'></i>
            </button>
          </div>
          <NavLink className='header__favorites' to={`/favorites`} title='favorites'>
            <i className='fas fa-star'></i>
            <div className='header__counter'>{favorites.length}</div>
          </NavLink>
        </div>
      </div>
    </header>
  );
};
export default Header;
