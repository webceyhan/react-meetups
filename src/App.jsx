import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { MainNavigation } from './components/MainNavigation';
import { AllMeetupsPage } from './pages/AllMeetups';
import { FavoritesPage } from './pages/Favorites';
import { NewMeetupPage } from './pages/NewMeetup';

export const App = () => {
    return (
        <BrowserRouter>
            <MainNavigation />
            <div className="container">
                <Routes>
                    <Route path="/" element={<Navigate to="all" />} />
                    <Route path="/all" element={<AllMeetupsPage />} />
                    <Route path="/new" element={<NewMeetupPage />} />
                    <Route path="/favorites" element={<FavoritesPage />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
};
