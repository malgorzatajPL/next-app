import FavoritesContext from '../../store/favorites-context';
import Card from '../ui/Card';
import classes from './MeetupItem.module.css';
import { useContext } from 'react';

function MeetupItem(props) {
  const favoritesCtx = useContext(FavoritesContext);
  const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id);

  function toggleFavoriteStatusHandler() {
    if (itemIsFavorite) {
      favoritesCtx.removeFavorite(props.id);
    } else {
      favoritesCtx.addFavorites({
        id: props.id,
        name: props.name,
        last_name: props.last_name,
        image: props.image,
        email: props.email,
      });
    }
  }
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img
            width='150px'
            height='150px'
            src={props.image}
            alt={props.name}
          />
        </div>
        <div className={classes.content}>
          <h3>{props.name}</h3>
          <p>{props.email}</p>
          <p>{props.last_name}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavoriteStatusHandler}>
            {itemIsFavorite ? 'remove from favorites' : 'To favorites'}
          </button>
        </div>
      </Card>
    </li>
  );
}
export default MeetupItem;
