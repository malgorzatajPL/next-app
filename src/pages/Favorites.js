import MeetupList from '../components/meetups/MeetupList';
import FavoritesContext from '../store/favorites-context';
import { useContext } from 'react';

function FavoritesPage() {
  const favoritesCtx = useContext(FavoritesContext);
  let content;
  if (favoritesCtx.totalFavorites === 0) {
    content = <p>You got no favorites yet</p>;
  } else {
    content = <MeetupList meetups={favoritesCtx.favorites} />;
  }
  return (
    <section>
      <h1>Favorite meetups</h1>
      {content}
    </section>
  );
}
export default FavoritesPage;
