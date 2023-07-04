import { Link } from 'react-router-dom/cjs/react-router-dom.min';

import classes from './MainNavigation.module.css';

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to='/'>All meetups</Link>
          </li>
          <li>
            <Link to='/new-meetups'>Add new Meetup</Link>
          </li>
          <li>
            <Link to='/favorites'>My favorites</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default MainNavigation;
