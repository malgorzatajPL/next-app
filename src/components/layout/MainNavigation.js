import { Link } from 'react-router-dom/cjs/react-router-dom.min';

import classes from './MainNavigation.module.css';
import { useContext } from 'react';
import FavoritesContext from '../../store/favorites-context';

function MainNavigation() {
  const favoritesCtx = useContext(FavoritesContext);
  return (
    <header className={classes.header}>
      <div>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to='/'>All meetups</Link>
          </li>
          <li>
            <Link to='/new-meetup'>Add new Meetup</Link>
          </li>
          <li>
            <Link to='/favorites'>
              My favorites
              <span className={classes.badge}>
                {favoritesCtx.totalFavorites}
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default MainNavigation;
