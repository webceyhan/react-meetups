import { MeetupList } from '../components/MeetupList';
import { useFavoritesContext } from '../store/FavoritesContext';

export const FavoritesPage = () => {
    const favoritesCtx = useFavoritesContext();

    return (
        <section>
            <h5>My Favorites</h5>
            <MeetupList meetups={favoritesCtx.favorites} />
        </section>
    );
};
