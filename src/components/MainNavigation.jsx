import { Link } from 'react-router-dom';

export const MainNavigation = () => {
    return (
        <nav className="navbar fixed-top navbar-expand navbar-dark bg-danger bg-opacity-75">
            <div className="container py-1">
                <Link className="navbar-brand" to="/">
                    ReactMeetups
                </Link>
                <button
                    type="button"
                    className="navbar-toggler"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/all">
                                All Meetups
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/new">
                                Add New Meetup
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/favorites">
                                My Favorites
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};
