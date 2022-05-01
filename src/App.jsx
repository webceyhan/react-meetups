import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { FavoritesContextProvider } from './store/FavoritesContext';
import { Layout } from './components/layout/Layout';
import { AllMeetupsPage } from './pages/AllMeetups';
import { FavoritesPage } from './pages/Favorites';
import { NewMeetupPage } from './pages/NewMeetup';

export const App = () => {
    return (
        <BrowserRouter>
            <FavoritesContextProvider>
                <Layout>
                    <Routes>
                        <Route path="/" element={<Navigate to="all" />} />
                        <Route path="/all" element={<AllMeetupsPage />} />
                        <Route path="/new" element={<NewMeetupPage />} />
                        <Route path="/favorites" element={<FavoritesPage />} />
                    </Routes>
                </Layout>
            </FavoritesContextProvider>
        </BrowserRouter>
    );
};
