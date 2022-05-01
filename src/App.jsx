import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { AllMeetupsPage } from './pages/AllMeetups';
import { FavoritesPage } from './pages/Favorites';
import { NewMeetupPage } from './pages/NewMeetup';

export const App = () => {
    return (
        <div className="container">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Navigate to="all" />} />
                    <Route path="/all" element={<AllMeetupsPage />} />
                    <Route path="/new" element={<NewMeetupPage />} />
                    <Route path="/favorites" element={<FavoritesPage />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};
